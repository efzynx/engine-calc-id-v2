"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ReactNode, useState } from "react";

interface CalculatorLayoutProps {
  children: ReactNode[];
}

export function CalculatorLayout({ children }: CalculatorLayoutProps) {
  const [activeTab, setActiveTab] = useState(0);
  
  const calculatorNames = [
    "Engine Displacement",
    "Valve Size",
    "Compression Ratio",
    "Carburetor Size"
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {calculatorNames.map((name, index) => (
          <Button
            key={name}
            variant={activeTab === index ? "default" : "outline"}
            onClick={() => setActiveTab(index)}
            className="rounded-full"
          >
            {name}
          </Button>
        ))}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>{calculatorNames[activeTab]}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="pt-4">
            {children[activeTab]}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}