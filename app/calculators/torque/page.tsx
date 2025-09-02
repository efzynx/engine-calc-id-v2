"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function TorqueCalculator() {
  const [horsepower, setHorsepower] = useState("");
  const [rpm, setRpm] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const hp = parseFloat(horsepower);
    const rpmValue = parseFloat(rpm);

    if (isNaN(hp) || isNaN(rpmValue)) {
      setResult(null);
      return;
    }

    // Calculate torque
    // Formula: (Horsepower * 5252) / RPM
    const torque = (hp * 5252) / rpmValue;
    
    setResult(torque);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Torque Calculator</h1>
        <p className="text-muted-foreground">
          Calculate engine torque based on horsepower and RPM
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Torque Calculator</CardTitle>
          <CardDescription>
            Calculate torque using horsepower and RPM values
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="horsepower">Horsepower (HP)</Label>
              <Input
                id="horsepower"
                type="number"
                value={horsepower}
                onChange={(e) => setHorsepower(e.target.value)}
                placeholder="Enter horsepower"
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
              Calculate Torque
            </Button>
          </div>
          
          {result !== null && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-lg font-semibold">
                Torque: {result.toFixed(1)} lb-ft
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                This calculation uses the standard formula: (Horsepower × 5252) / RPM
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}