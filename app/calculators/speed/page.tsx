"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SpeedCalculator() {
  const [rpm, setRpm] = useState("");
  const [gearRatio, setGearRatio] = useState("");
  const [tireDiameter, setTireDiameter] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const rpmValue = parseFloat(rpm);
    const ratio = parseFloat(gearRatio);
    const diameter = parseFloat(tireDiameter);

    if (isNaN(rpmValue) || isNaN(ratio) || isNaN(diameter) || ratio <= 0 || diameter <= 0) {
      setResult(null);
      return;
    }

    // Calculate speed in mph
    // Formula: (RPM * Tire Diameter * π) / (Gear Ratio * 1056)
    const speed = (rpmValue * diameter * Math.PI) / (ratio * 1056);
    
    setResult(speed);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Speed Calculator</h1>
        <p className="text-muted-foreground">
          Calculate vehicle speed based on RPM, gear ratio, and tire size
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Speed Calculator</CardTitle>
          <CardDescription>
            Calculate vehicle speed in mph based on engine RPM and drivetrain specs
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
                placeholder="Enter engine RPM"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="gear-ratio">Gear Ratio</Label>
              <Input
                id="gear-ratio"
                type="number"
                step="0.01"
                value={gearRatio}
                onChange={(e) => setGearRatio(e.target.value)}
                placeholder="Enter gear ratio"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tire-diameter">Tire Diameter (inches)</Label>
              <Input
                id="tire-diameter"
                type="number"
                step="0.1"
                value={tireDiameter}
                onChange={(e) => setTireDiameter(e.target.value)}
                placeholder="Enter tire diameter"
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={calculate} className="w-full sm:w-auto">
              Calculate Speed
            </Button>
          </div>
          
          {result !== null && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-lg font-semibold">
                Vehicle Speed: {result.toFixed(1)} mph
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                This is the theoretical speed at the given RPM and gear ratio
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}