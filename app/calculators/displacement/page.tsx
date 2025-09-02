import { EngineDisplacementCalculator } from "@/components/calculators/engine-displacement";

export default function DisplacementCalculatorPage() {
  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Engine Displacement Calculator</h1>
        <p className="text-muted-foreground mt-2">
          Calculate engine displacement based on bore, stroke, and cylinder count
        </p>
      </div>
      
      <div className="max-w-2xl">
        <EngineDisplacementCalculator />
      </div>
    </div>
  );
}