import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SignUpUserSteps() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Access Engine Calculators</CardTitle>
        <CardDescription>
          Start using the engine calculators right away.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Navigate to the calculators page to start using the engine calculation tools.
          </p>
          <Button className="w-full" onClick={() => window.location.href = '/calculators'}>
            Go to Calculators
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}