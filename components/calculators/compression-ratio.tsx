"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function CompressionRatioCalculator() {
  const [sweptVolume, setSweptVolume] = useState("");
  const [clearanceVolume, setClearanceVolume] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const swept = parseFloat(sweptVolume);
    const clearance = parseFloat(clearanceVolume);

    if (isNaN(swept) || isNaN(clearance) || clearance <= 0) {
      setResult(null);
      return;
    }

    // Formula: (Swept Volume + Clearance Volume) / Clearance Volume
    const ratio = (swept + clearance) / clearance;
    
    setResult(ratio);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Compression Ratio Calculator</CardTitle>
        <CardDescription>
          Calculate compression ratio using swept and clearance volumes
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="swept-volume">Swept Volume (cc)</Label>
            <Input
              id="swept-volume"
              type="number"
              value={sweptVolume}
              onChange={(e) => setSweptVolume(e.target.value)}
              placeholder="Enter swept volume"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="clearance-volume">Clearance Volume (cc)</Label>
            <Input
              id="clearance-volume"
              type="number"
              value={clearanceVolume}
              onChange={(e) => setClearanceVolume(e.target.value)}
              placeholder="Enter clearance volume"
            />
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={calculate} className="w-full sm:w-auto">
            Calculate Compression Ratio
          </Button>
        </div>
        
        {result !== null && (
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-lg font-semibold">
              Compression Ratio: {result.toFixed(2)}:1
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}