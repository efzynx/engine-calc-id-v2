"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function PowerToWeightCalculator() {
  const [horsepower, setHorsepower] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [unit, setUnit] = useState<"lb" | "kg">("lb");

  const calculate = () => {
    const hp = parseFloat(horsepower);
    const w = parseFloat(weight);

    if (isNaN(hp) || isNaN(w) || w <= 0) {
      setResult(null);
      return;
    }

    // Convert weight to pounds if in kg
    const weightInLb = unit === "kg" ? w * 2.20462 : w;
    
    // Calculate power-to-weight ratio
    const ratio = weightInLb / hp;
    
    setResult(ratio);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Power-to-Weight Ratio Calculator</h1>
        <p className="text-muted-foreground">
          Calculate the power-to-weight ratio of your vehicle
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Power-to-Weight Ratio Calculator</CardTitle>
          <CardDescription>
            Calculate power-to-weight ratio in lbs/HP
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
              <Label htmlFor="weight">Vehicle Weight ({unit})</Label>
              <Input
                id="weight"
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter vehicle weight"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Weight Unit</Label>
              <div className="flex gap-4">
                <Button
                  variant={unit === "lb" ? "default" : "outline"}
                  onClick={() => setUnit("lb")}
                >
                  Pounds (lb)
                </Button>
                <Button
                  variant={unit === "kg" ? "default" : "outline"}
                  onClick={() => setUnit("kg")}
                >
                  Kilograms (kg)
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={calculate} className="w-full sm:w-auto">
              Calculate Ratio
            </Button>
          </div>
          
          {result !== null && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-lg font-semibold">
                Power-to-Weight Ratio: {result.toFixed(2)} lbs/HP
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                This means each horsepower has to move {result.toFixed(2)} pounds of vehicle weight
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}