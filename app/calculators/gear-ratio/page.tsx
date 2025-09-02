"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function GearRatioCalculator() {
  const [driveTeeth, setDriveTeeth] = useState("");
  const [drivenTeeth, setDrivenTeeth] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const drive = parseFloat(driveTeeth);
    const driven = parseFloat(drivenTeeth);

    if (isNaN(drive) || isNaN(driven) || drive <= 0 || driven <= 0) {
      setResult(null);
      return;
    }

    // Calculate gear ratio
    const ratio = driven / drive;
    
    setResult(ratio);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Gear Ratio Calculator</h1>
        <p className="text-muted-foreground">
          Calculate gear ratios for your transmission or differential
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Gear Ratio Calculator</CardTitle>
          <CardDescription>
            Calculate the ratio between drive and driven gears
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="drive-teeth">Drive Gear Teeth</Label>
              <Input
                id="drive-teeth"
                type="number"
                value={driveTeeth}
                onChange={(e) => setDriveTeeth(e.target.value)}
                placeholder="Enter drive gear teeth"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="driven-teeth">Driven Gear Teeth</Label>
              <Input
                id="driven-teeth"
                type="number"
                value={drivenTeeth}
                onChange={(e) => setDrivenTeeth(e.target.value)}
                placeholder="Enter driven gear teeth"
              />
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
                Gear Ratio: {result.toFixed(2)}:1
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                For every 1 rotation of the drive gear, the driven gear rotates {result.toFixed(2)} times
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}