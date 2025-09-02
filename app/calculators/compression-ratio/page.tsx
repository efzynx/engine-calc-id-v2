import { CompressionRatioCalculator } from "@/components/calculators/compression-ratio";

export default function CompressionRatioCalculatorPage() {
  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Compression Ratio Calculator</h1>
        <p className="text-muted-foreground mt-2">
          Calculate compression ratio using swept and clearance volumes
        </p>
      </div>
      
      <div className="max-w-2xl">
        <CompressionRatioCalculator />
      </div>
    </div>
  );
}