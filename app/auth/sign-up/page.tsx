import { SignUpForm } from "@/components/sign-up-form";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <SignUpForm />
        <Card>
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-primary font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}