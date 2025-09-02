"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function FuelRatioCalculator() {
  const [gasoline, setGasoline] = useState("");
  const [oil, setOil] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const gas = parseFloat(gasoline);
    const oilAmount = parseFloat(oil);

    if (isNaN(gas) || isNaN(oilAmount) || gas <= 0) {
      setResult(null);
      return;
    }

    // Calculate fuel-to-oil ratio
    const ratio = gas / oilAmount;
    
    setResult(ratio);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Fuel Ratio Calculator</h1>
        <p className="text-muted-foreground">
          Calculate the fuel-to-oil ratio for your engine
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Fuel Ratio Calculator</CardTitle>
          <CardDescription>
            Calculate the fuel-to-oil ratio for 2-stroke engines
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="gasoline">Gasoline (ml)</Label>
              <Input
                id="gasoline"
                type="number"
                value={gasoline}
                onChange={(e) => setGasoline(e.target.value)}
                placeholder="Enter gasoline amount"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="oil">Oil (ml)</Label>
              <Input
                id="oil"
                type="number"
                value={oil}
                onChange={(e) => setOil(e.target.value)}
                placeholder="Enter oil amount"
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
                Fuel-to-Oil Ratio: 1:{result.toFixed(2)}
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                This means 1 part oil to {result.toFixed(2)} parts gasoline
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}