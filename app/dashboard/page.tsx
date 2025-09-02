import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { 
  Car, 
  RotateCcw, 
  Zap, 
  Wrench,
  Calculator
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const categories = [
    {
      title: "Engine Calculators",
      description: "Calculate engine parameters like displacement, compression ratio, and more",
      icon: Car,
      href: "/calculators/displacement",
    },
    {
      title: "Wheel & Gear",
      description: "Calculate gear ratios, tire sizes, and speed",
      icon: RotateCcw,
      href: "/calculators/gear-ratio",
    },
    {
      title: "Performance",
      description: "Calculate horsepower, torque, and power-to-weight ratios",
      icon: Zap,
      href: "/calculators/horsepower",
    },
    {
      title: "Maintenance",
      description: "Track oil changes, service intervals, and maintenance schedules",
      icon: Wrench,
      href: "/calculators/oil-change",
    },
  ];

  const quickCalculators = [
    { name: "Engine Displacement", href: "/calculators/displacement" },
    { name: "Valve Size", href: "/calculators/valve-size" },
    { name: "Compression Ratio", href: "/calculators/compression-ratio" },
    { name: "Carburetor Size", href: "/calculators/carburetor-size" },
    { name: "Gear Ratio", href: "/calculators/gear-ratio" },
    { name: "Tire Size", href: "/calculators/tire-size" },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="rounded-xl bg-gradient-to-r from-primary to-primary/80 p-8 text-primary-foreground shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold">The Most Complete Engine Calculator for Professional Mechanics</h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl">
          Precise calculations for engine displacement, valve sizing, compression ratios, and more. 
          Trusted by mechanics worldwide for accurate automotive engineering computations.
        </p>
        <Button 
          size="lg" 
          className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90"
          asChild
        >
          <Link href="#quick-calculators">Start Calculating</Link>
        </Button>
      </div>

      {/* Category Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <Card 
            key={category.title} 
            className="hover:shadow-lg transition-all duration-300 border-0 bg-card shadow-md"
          >
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <category.icon className="text-primary h-6 w-6" />
              </div>
              <CardTitle className="mt-4 text-xl">{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={category.href}>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Explore Calculators
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Calculators and Recent Section */}
      <div className="grid gap-6 md:grid-cols-2" id="quick-calculators">
        <Card className="shadow-md border-0">
          <CardHeader>
            <CardTitle>Quick Calculators</CardTitle>
            <CardDescription>
              Access your most used calculators quickly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {quickCalculators.map((calc) => (
                <Link key={calc.name} href={calc.href}>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-between py-6 hover:bg-accent hover:text-accent-foreground"
                  >
                    {calc.name}
                    <Calculator className="h-5 w-5" />
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md border-0">
          <CardHeader>
            <CardTitle>Recent Calculations</CardTitle>
            <CardDescription>
              Your recent calculations will appear here
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-full min-h-[300px]">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                  <Calculator className="h-8 w-8 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">
                  No recent calculations yet. <br />
                  Start by using one of the calculators.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}