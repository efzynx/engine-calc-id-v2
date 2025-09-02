"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function CarburetorSizeCalculator() {
  const [engineDisplacement, setEngineDisplacement] = useState("");
  const [rpm, setRpm] = useState("6000");
  const [volumetricEfficiency, setVolumetricEfficiency] = useState("85");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const displacement = parseFloat(engineDisplacement);
    const rpmValue = parseFloat(rpm);
    const ve = parseFloat(volumetricEfficiency);

    if (isNaN(displacement) || isNaN(rpmValue) || isNaN(ve)) {
      setResult(null);
      return;
    }

    // Formula: (Displacement × RPM × VE) / 3456
    // 3456 is a constant for converting to CFM (cubic feet per minute)
    const cfm = (displacement * rpmValue * ve) / (3456 * 100);
    
    setResult(cfm);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Carburetor Size Calculator</CardTitle>
        <CardDescription>
          Determine the recommended carburetor size in CFM based on engine specs
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="displacement">Engine Displacement (ci)</Label>
            <Input
              id="displacement"
              type="number"
              value={engineDisplacement}
              onChange={(e) => setEngineDisplacement(e.target.value)}
              placeholder="Enter engine displacement"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="rpm">Maximum RPM</Label>
            <Input
              id="rpm"
              type="number"
              value={rpm}
              onChange={(e) => setRpm(e.target.value)}
              placeholder="6000"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="ve">Volumetric Efficiency (%)</Label>
            <Input
              id="ve"
              type="number"
              value={volumetricEfficiency}
              onChange={(e) => setVolumetricEfficiency(e.target.value)}
              placeholder="85"
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={calculate} className="w-full sm:w-auto">
            Calculate Carburetor Size
          </Button>
        </div>
        
        {result !== null && (
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-lg font-semibold">
              Recommended Carburetor Size: {result.toFixed(2)} CFM
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}