"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ErrorPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Authentication Error</CardTitle>
          <CardDescription>
            There was an error during the authentication process.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Please try signing in again or contact support if the issue persists.
            </p>
            <Button 
              className="w-full"
              onClick={() => window.location.href = '/auth/login'}
            >
              Go to Login
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}