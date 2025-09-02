"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function TireSizeCalculator() {
  const [width, setWidth] = useState("");
  const [aspectRatio, setAspectRatio] = useState("");
  const [wheelDiameter, setWheelDiameter] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const w = parseFloat(width);
    const ar = parseFloat(aspectRatio);
    const wd = parseFloat(wheelDiameter);

    if (isNaN(w) || isNaN(ar) || isNaN(wd)) {
      setResult(null);
      return;
    }

    // Calculate tire diameter in inches
    // Formula: (Width * Aspect Ratio * 2 / 25.4) + Wheel Diameter
    const diameter = (w * ar * 2) / 25.4 + wd;
    
    setResult(diameter);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Tire Size Calculator</h1>
        <p className="text-muted-foreground">
          Calculate tire diameter based on tire size specifications
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Tire Size Calculator</CardTitle>
          <CardDescription>
            Calculate tire diameter from width, aspect ratio, and wheel diameter
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="width">Tire Width (mm)</Label>
              <Input
                id="width"
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="Enter tire width"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="aspect-ratio">Aspect Ratio (%)</Label>
              <Input
                id="aspect-ratio"
                type="number"
                value={aspectRatio}
                onChange={(e) => setAspectRatio(e.target.value)}
                placeholder="Enter aspect ratio"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="wheel-diameter">Wheel Diameter (inches)</Label>
              <Input
                id="wheel-diameter"
                type="number"
                value={wheelDiameter}
                onChange={(e) => setWheelDiameter(e.target.value)}
                placeholder="Enter wheel diameter"
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={calculate} className="w-full sm:w-auto">
              Calculate Diameter
            </Button>
          </div>
          
          {result !== null && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-lg font-semibold">
                Tire Diameter: {result.toFixed(2)} inches
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                This is the overall diameter of the tire including the wheel
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}