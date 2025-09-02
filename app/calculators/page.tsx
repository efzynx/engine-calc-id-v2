import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function CalculatorsPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  
  // Redirect unauthenticated users to login
  if (error || !data?.user) {
    redirect("/auth/login?next=/calculators");
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Engine Calculators</h1>
        <p className="text-muted-foreground mt-2">
          Calculate various engine parameters and specifications
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <CalculatorCard 
          title="Engine Displacement" 
          description="Calculate engine displacement in CC or cubic inches" 
          href="/calculators/displacement"
        />
        <CalculatorCard 
          title="Valve Size" 
          description="Determine optimal intake and exhaust valve sizes" 
          href="/calculators/valve-size"
        />
        <CalculatorCard 
          title="Compression Ratio" 
          description="Calculate compression ratio using volumes" 
          href="/calculators/compression-ratio"
        />
        <CalculatorCard 
          title="Carburetor Size" 
          description="Determine the recommended carburetor size in CFM" 
          href="/calculators/carburetor-size"
        />
      </div>
    </div>
  );
}

function CalculatorCard({ title, description, href }: { title: string; description: string; href: string; }) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <a 
        href={href} 
        className="text-primary font-medium hover:underline"
      >
        Use Calculator
      </a>
    </div>
  );
}