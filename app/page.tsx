import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function Home() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();
  
  // Redirect authenticated users to dashboard, others to login
  if (data?.user) {
    redirect("/dashboard");
  } else {
    redirect("/auth/login");
  }
}