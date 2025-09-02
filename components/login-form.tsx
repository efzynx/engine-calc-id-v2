"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
    setLoading(false);
  };

  const handleOAuthSignIn = async (provider: "github" | "google") => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-lg border-0">
      <CardHeader className="text-center bg-primary/5">
        <CardTitle className="text-2xl">Welcome Back</CardTitle>
        <CardDescription>
          Sign in to your account to access the engine calculators
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border-muted focus:border-primary"
              placeholder="Enter your email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border-muted focus:border-primary"
              placeholder="Enter your password"
            />
          </div>
          {error && <div className="text-destructive text-sm">{error}</div>}
          <Button 
            type="submit" 
            disabled={loading} 
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
        
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-muted" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        
        <div className="flex gap-3">
          <Button
            variant="outline"
            disabled={loading}
            onClick={() => handleOAuthSignIn("github")}
            className="w-full border-muted"
          >
            GitHub
          </Button>
          <Button
            variant="outline"
            disabled={loading}
            onClick={() => handleOAuthSignIn("google")}
            className="w-full border-muted"
          >
            Google
          </Button>
        </div>
        
        <div className="mt-6 text-center text-sm">
          <Link 
            href="/auth/forgot-password" 
            className="text-accent hover:text-accent/90 font-medium"
          >
            Forgot your password?
          </Link>
        </div>
        
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link 
            href="/auth/sign-up" 
            className="text-accent hover:text-accent/90 font-medium"
          >
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}