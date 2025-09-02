import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ConnectSupabaseSteps() {
  return (
    <ol className="relative border-l border-border ml-3 space-y-10 py-4">
      <li className="space-y-4 ml-6">
        <div className="absolute -left-3 mt-2.5 rounded-full border border-background bg-muted p-1">
          <div className="h-5 w-5 rounded-full bg-foreground" />
        </div>
        <div className="space-y-1">
          <h3 className="font-medium">Create a Supabase project</h3>
          <p className="text-sm text-muted-foreground">
            Head over to{" "}
            <a
              href="https://app.supabase.com/"
              target="_blank"
              className="font-medium text-foreground underline"
              rel="noreferrer"
            >
              app.supabase.com
            </a>{" "}
            and create a new project.
          </p>
        </div>
      </li>
      <li className="space-y-4 ml-6">
        <div className="absolute -left-3 mt-2.5 rounded-full border border-background bg-muted p-1">
          <div className="h-5 w-5 rounded-full bg-foreground" />
        </div>
        <div className="space-y-1">
          <h3 className="font-medium">Declare environment variables</h3>
          <p className="text-sm text-muted-foreground">
            Rename the{" "}
            <span className="rounded bg-muted px-2 py-1 font-mono text-xs font-medium text-foreground">
              .env.local.example
            </span>{" "}
            file to{" "}
            <span className="rounded bg-muted px-2 py-1 font-mono text-xs font-medium text-foreground">
              .env.local
            </span>{" "}
            and populate it with your Supabase URL and anon key.
          </p>
        </div>
      </li>
      <li className="space-y-4 ml-6">
        <div className="absolute -left-3 mt-2.5 rounded-full border border-background bg-muted p-1">
          <div className="h-5 w-5 rounded-full bg-foreground" />
        </div>
        <div className="space-y-1">
          <h3 className="font-medium">Install dependencies</h3>
          <p className="text-sm text-muted-foreground">
            Run{" "}
            <span className="rounded bg-muted px-2 py-1 font-mono text-xs font-medium text-foreground">
              npm install
            </span>{" "}
            to install the required dependencies.
          </p>
        </div>
      </li>
      <li className="space-y-4 ml-6">
        <div className="absolute -left-3 mt-2.5 rounded-full border border-background bg-muted p-1">
          <div className="h-5 w-5 rounded-full bg-foreground" />
        </div>
        <div className="space-y-1">
          <h3 className="font-medium">Run the development server</h3>
          <p className="text-sm text-muted-foreground">
            Run{" "}
            <span className="rounded bg-muted px-2 py-1 font-mono text-xs font-medium text-foreground">
              npm run dev
            </span>{" "}
            and start building your app.
          </p>
        </div>
      </li>
    </ol>
  );
}

export function SignUpUserSteps() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>
            Sign up a new user to your application.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="user@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button className="w-full">Sign Up</Button>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>
            Sign in to your application with email and password.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sign-in-email">Email</Label>
              <Input id="sign-in-email" placeholder="user@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sign-in-password">Password</Label>
              <Input id="sign-in-password" type="password" />
            </div>
            <Button className="w-full">Sign In</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}