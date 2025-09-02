import { Header } from "@/components/header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4 bg-gradient-to-br from-primary/5 to-accent/5 pt-16">
        <div className="w-full max-w-md">
          {children}
        </div>
      </main>
    </div>
  );
}