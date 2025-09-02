"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ValveSizeCalculatorPage() {
  const [bore, setBore] = useState("");
  const [intakePercentage, setIntakePercentage] = useState("85");
  const [exhaustPercentage, setExhaustPercentage] = useState("80");
  const [intakeResult, setIntakeResult] = useState<number | null>(null);
  const [exhaustResult, setExhaustResult] = useState<number | null>(null);
  const [unit, setUnit] = useState<"mm" | "in">("mm");

  const calculate = () => {
    const boreNum = parseFloat(bore);
    const intakePercent = parseFloat(intakePercentage);
    const exhaustPercent = parseFloat(exhaustPercentage);

    if (isNaN(boreNum) || isNaN(intakePercent) || isNaN(exhaustPercent)) {
      setIntakeResult(null);
      setExhaustResult(null);
      return;
    }

    // Convert bore to mm if in inches
    const boreInMm = unit === "in" ? boreNum * 25.4 : boreNum;
    
    // Calculate valve sizes as percentages of bore
    const intakeSize = (boreInMm * intakePercent) / 100;
    const exhaustSize = (boreInMm * exhaustPercent) / 100;
    
    // Convert back to inches if needed
    const finalIntake = unit === "in" ? intakeSize / 25.4 : intakeSize;
    const finalExhaust = unit === "in" ? exhaustSize / 25.4 : exhaustSize;
    
    setIntakeResult(finalIntake);
    setExhaustResult(finalExhaust);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Valve Size Calculator</h1>
        <p className="text-muted-foreground mt-2">
          Determine optimal intake and exhaust valve sizes as percentages of bore diameter
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Valve Size Calculator</CardTitle>
          <CardDescription>
            Determine optimal intake and exhaust valve sizes as percentages of bore diameter
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="valve-bore">Bore ({unit})</Label>
              <Input
                id="valve-bore"
                type="number"
                value={bore}
                onChange={(e) => setBore(e.target.value)}
                placeholder="Enter bore"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="intake-percentage">Intake Valve Percentage (%)</Label>
              <Input
                id="intake-percentage"
                type="number"
                value={intakePercentage}
                onChange={(e) => setIntakePercentage(e.target.value)}
                placeholder="85"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="exhaust-percentage">Exhaust Valve Percentage (%)</Label>
              <Input
                id="exhaust-percentage"
                type="number"
                value={exhaustPercentage}
                onChange={(e) => setExhaustPercentage(e.target.value)}
                placeholder="80"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Unit</Label>
              <div className="flex gap-4">
                <Button
                  variant={unit === "mm" ? "default" : "outline"}
                  onClick={() => setUnit("mm")}
                >
                  mm
                </Button>
                <Button
                  variant={unit === "in" ? "default" : "outline"}
                  onClick={() => setUnit("in")}
                >
                  in
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={calculate} className="w-full sm:w-auto">
              Calculate Valve Sizes
            </Button>
          </div>
          
          {(intakeResult !== null || exhaustResult !== null) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {intakeResult !== null && (
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-lg font-semibold">
                    Intake Valve Size: {intakeResult.toFixed(2)} {unit}
                  </p>
                </div>
              )}
              
              {exhaustResult !== null && (
                <div className="p-4 bg-muted rounded-lg">
                  <p className="text-lg font-semibold">
                    Exhaust Valve Size: {exhaustResult.toFixed(2)} {unit}
                  </p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}