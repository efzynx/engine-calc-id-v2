"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ServiceIntervalCalculator() {
  const [lastMileage, setLastMileage] = useState("");
  const [currentMileage, setCurrentMileage] = useState("");
  const [serviceItems, setServiceItems] = useState([
    { name: "Oil Change", interval: 3000, due: false },
    { name: "Air Filter", interval: 15000, due: false },
    { name: "Spark Plugs", interval: 30000, due: false },
    { name: "Transmission Fluid", interval: 60000, due: false },
    { name: "Coolant", interval: 50000, due: false },
  ]);

  const calculate = () => {
    const last = parseFloat(lastMileage);
    const current = parseFloat(currentMileage);

    if (isNaN(last) || isNaN(current)) {
      return;
    }

    const milesDriven = current - last;
    
    const updatedItems = serviceItems.map(item => ({
      ...item,
      due: milesDriven >= item.interval
    }));
    
    setServiceItems(updatedItems);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Service Interval Calculator</h1>
        <p className="text-muted-foreground">
          Determine which services are due based on mileage
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Service Interval Calculator</CardTitle>
          <CardDescription>
            Check which maintenance services are due based on mileage since last service
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="last-mileage">Last Service Mileage</Label>
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
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={calculate} className="w-full sm:w-auto">
              Check Service Intervals
            </Button>
          </div>
          
          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-3">Service Recommendations</h3>
            <div className="space-y-3">
              {serviceItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    item.due ? "bg-red-100 dark:bg-red-900/30" : "bg-muted"
                  }`}
                >
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Recommended every {item.interval.toLocaleString()} miles
                    </p>
                  </div>
                  <span 
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      item.due 
                        ? "bg-red-500 text-white" 
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {item.due ? "Due" : "OK"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}