"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Car } from "lucide-react";

export function EngineDisplacementCalculator() {
  const [bore, setBore] = useState("");
  const [stroke, setStroke] = useState("");
  const [cylinders, setCylinders] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [unit, setUnit] = useState<"cc" | "ci">("cc");

  const calculate = () => {
    const boreNum = parseFloat(bore);
    const strokeNum = parseFloat(stroke);
    const cylindersNum = parseInt(cylinders);

    if (isNaN(boreNum) || isNaN(strokeNum) || isNaN(cylindersNum)) {
      setResult(null);
      return;
    }

    // Formula: (π/4) × bore² × stroke × cylinders
    const displacement = (Math.PI / 4) * Math.pow(boreNum, 2) * strokeNum * cylindersNum;
    
    // Convert to cubic inches if needed
    const finalResult = unit === "ci" ? displacement / 16.387064 : displacement;
    
    setResult(finalResult);
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-md border-0">
        <CardHeader className="bg-primary/5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Car className="text-primary h-5 w-5" />
            </div>
            <div>
              <CardTitle>Engine Displacement Calculator</CardTitle>
              <CardDescription>
                Calculate engine displacement based on bore, stroke, and cylinder count
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="bore">Bore ({unit === "cc" ? "mm" : "in"})</Label>
              <Input
                id="bore"
                type="number"
                value={bore}
                onChange={(e) => setBore(e.target.value)}
                placeholder="Enter bore"
                className="border-muted focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="stroke">Stroke ({unit === "cc" ? "mm" : "in"})</Label>
              <Input
                id="stroke"
                type="number"
                value={stroke}
                onChange={(e) => setStroke(e.target.value)}
                placeholder="Enter stroke"
                className="border-muted focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="cylinders">Number of Cylinders</Label>
              <Input
                id="cylinders"
                type="number"
                value={cylinders}
                onChange={(e) => setCylinders(e.target.value)}
                placeholder="Enter number of cylinders"
                className="border-muted focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Unit</Label>
              <div className="flex gap-4">
                <Button
                  variant={unit === "cc" ? "default" : "outline"}
                  onClick={() => setUnit("cc")}
                  className={unit === "cc" ? "bg-accent hover:bg-accent/90" : ""}
                >
                  CC (mm)
                </Button>
                <Button
                  variant={unit === "ci" ? "default" : "outline"}
                  onClick={() => setUnit("ci")}
                  className={unit === "ci" ? "bg-accent hover:bg-accent/90" : ""}
                >
                  CI (in)
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              onClick={calculate} 
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Calculate Displacement
            </Button>
            <Button 
              variant="outline" 
              onClick={() => {
                setBore("");
                setStroke("");
                setCylinders("");
                setResult(null);
              }}
              className="w-full sm:w-auto"
            >
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {result !== null && (
        <Card className="border-l-4 border-l-accent shadow-md border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold">Calculation Result</h3>
                <p className="text-muted-foreground">
                  Engine displacement based on your inputs
                </p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-accent">
                  {result.toFixed(2)} {unit}
                </p>
                <p className="text-sm text-muted-foreground">
                  Total engine displacement
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}