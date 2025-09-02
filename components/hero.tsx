import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative w-full">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Engine Calculator
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-muted-foreground">
            Calculate engine parameters like displacement, valve sizes, compression ratio, and carburetor size
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/calculators">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}