"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function OilChangeCalculator() {
  const [lastMileage, setLastMileage] = useState("");
  const [currentMileage, setCurrentMileage] = useState("");
  const [lastDate, setLastDate] = useState("");
  const [intervalMiles, setIntervalMiles] = useState("3000");
  const [resultMiles, setResultMiles] = useState<number | null>(null);
  const [resultDate, setResultDate] = useState<string | null>(null);

  const calculate = () => {
    const last = parseFloat(lastMileage);
    const current = parseFloat(currentMileage);
    const interval = parseFloat(intervalMiles);

    if (isNaN(last) || isNaN(current) || isNaN(interval) || interval <= 0) {
      setResultMiles(null);
      setResultDate(null);
      return;
    }

    // Calculate next oil change mileage
    const nextMileage = last + interval;
    const milesRemaining = nextMileage - current;
    
    setResultMiles(milesRemaining);
    
    // Calculate approximate date (simplified - assuming 1000 miles per month)
    if (lastDate) {
      const lastDateObj = new Date(lastDate);
      const monthsToAdd = milesRemaining / 1000;
      const nextDate = new Date(lastDateObj);
      nextDate.setMonth(nextDate.getMonth() + Math.round(monthsToAdd));
      setResultDate(nextDate.toLocaleDateString());
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Oil Change Calculator</h1>
        <p className="text-muted-foreground">
          Calculate when your next oil change is due
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Oil Change Calculator</CardTitle>
          <CardDescription>
            Determine when your next oil change is due based on mileage
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="last-mileage">Last Oil Change Mileage</Label>
              <Input
                id="last-mileage"
                type="number"
                value={lastMileage}
                onChange={(e) => setLastMileage(e.target.value)}
                placeholder="Enter mileage"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="current-mileage">Current Mileage</Label>
              <Input
                id="current-mileage"
                type="number"
                value={currentMileage}
                onChange={(e) => setCurrentMileage(e.target.value)}
                placeholder="Enter current mileage"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="last-date">Last Oil Change Date</Label>
              <Input
                id="last-date"
                type="date"
                value={lastDate}
                onChange={(e) => setLastDate(e.target.value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="interval">Oil Change Interval (miles)</Label>
              <Input
                id="interval"
                type="number"
                value={intervalMiles}
                onChange={(e) => setIntervalMiles(e.target.value)}
                placeholder="3000"
              />
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={calculate} className="w-full sm:w-auto">
              Calculate Next Oil Change
            </Button>
          </div>
          
          {resultMiles !== null && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-lg font-semibold">
                {resultMiles > 0 
                  ? `Next oil change due in ${resultMiles.toFixed(0)} miles` 
                  : "Oil change is overdue!"}
              </p>
              {resultDate && (
                <p className="text-sm text-muted-foreground mt-2">
                  Estimated date: {resultDate}
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}