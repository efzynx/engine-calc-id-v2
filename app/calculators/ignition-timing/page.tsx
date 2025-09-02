"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function IgnitionTimingCalculator() {
  const [rpm, setRpm] = useState("");
  const [baseTiming, setBaseTiming] = useState("10");
  const [advanceRate, setAdvanceRate] = useState("0.5");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const rpmValue = parseFloat(rpm);
    const base = parseFloat(baseTiming);
    const advance = parseFloat(advanceRate);

    if (isNaN(rpmValue) || isNaN(base) || isNaN(advance)) {
      setResult(null);
      return;
    }

    // Calculate ignition timing
    // This is a simplified formula - in reality, ignition timing curves are more complex
    const timing = base + (rpmValue / 1000) * advance;
    
    setResult(timing);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Ignition Timing Calculator</h1>
        <p className="text-muted-foreground">
          Calculate optimal ignition timing based on RPM
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Ignition Timing Calculator</CardTitle>
          <CardDescription>
            Calculate ignition timing based on RPM and advance rate
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="rpm">Engine RPM</Label>
              <Input
                id="rpm"
                type="number"
                value={rpm}
                onChange={(e) => setRpm(e.target.value)}
                placeholder="Enter RPM"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="base-timing">Base Timing (degrees BTDC)</Label>
              <Input
                id="base-timing"
                type="number"
                value={baseTiming}
                onChange={(e) => setBaseTiming(e.target.value)}
                placeholder="10"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="advance-rate">Advance Rate (degrees per 1000 RPM)</Label>
              <Input
                id="advance-rate"
                type="number"
                step="0.1"
                value={advanceRate}
                onChange={(e) => setAdvanceRate(e.target.value)}
                placeholder="0.5"
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={calculate} className="w-full sm:w-auto">
              Calculate Timing
            </Button>
          </div>
          
          {result !== null && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-lg font-semibold">
                Optimal Ignition Timing: {result.toFixed(1)}° BTDC
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                This is a simplified calculation. Actual timing curves may vary.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}