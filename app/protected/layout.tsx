import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function AuthProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  
  // Redirect unauthenticated users to login
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return <>{children}</>;
}