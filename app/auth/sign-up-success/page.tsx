import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignUpSuccessPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Confirm Your Email</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              We&apos;ve sent a confirmation email to your inbox. Please check your email and click the confirmation link to complete your registration.
            </p>
            <p className="text-sm text-muted-foreground">
              If you don&apos;t see the email, check your spam folder.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}