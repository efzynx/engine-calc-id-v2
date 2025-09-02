"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function HorsepowerCalculator() {
  const [torque, setTorque] = useState("");
  const [rpm, setRpm] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const t = parseFloat(torque);
    const rpmValue = parseFloat(rpm);

    if (isNaN(t) || isNaN(rpmValue)) {
      setResult(null);
      return;
    }

    // Calculate horsepower
    // Formula: (Torque * RPM) / 5252
    const hp = (t * rpmValue) / 5252;
    
    setResult(hp);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Horsepower Calculator</h1>
        <p className="text-muted-foreground">
          Calculate engine horsepower based on torque and RPM
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Horsepower Calculator</CardTitle>
          <CardDescription>
            Calculate horsepower using torque and RPM values
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="torque">Torque (lb-ft)</Label>
              <Input
                id="torque"
                type="number"
                value={torque}
                onChange={(e) => setTorque(e.target.value)}
                placeholder="Enter torque"
              />
            </div>
            
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
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={calculate} className="w-full sm:w-auto">
              Calculate Horsepower
            </Button>
          </div>
          
          {result !== null && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-lg font-semibold">
                Horsepower: {result.toFixed(1)} HP
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                This calculation uses the standard formula: (Torque × RPM) / 5252
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}