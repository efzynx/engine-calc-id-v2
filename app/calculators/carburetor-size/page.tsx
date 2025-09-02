import { CarburetorSizeCalculator } from "@/components/calculators/carburetor-size";

export default function CarburetorSizeCalculatorPage() {
  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Carburetor Size Calculator</h1>
        <p className="text-muted-foreground mt-2">
          Determine the recommended carburetor size in CFM based on engine specs
        </p>
      </div>
      
      <div className="max-w-2xl">
        <CarburetorSizeCalculator />
      </div>
    </div>
  );
}