"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { User } from "@supabase/auth-js";

export default function SharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarMinimized, setSidebarMinimized] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  // Check if user is authenticated
  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      
      // Redirect to login if not authenticated and not on auth pages
      if (!user && !pathname.startsWith('/auth')) {
        router.push('/auth/login');
      }
    };
    
    checkUser();
  }, [pathname, router, supabase]);

  // Close sidebar when route changes
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      const mobileMenuButton = document.getElementById('mobile-menu-button');
      
      if (sidebar && 
          !sidebar.contains(e.target as Node) && 
          mobileMenuButton && 
          !mobileMenuButton.contains(e.target as Node) &&
          sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  if (!user && !pathname.startsWith('/auth')) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <div className="flex flex-1 pt-16">
        {/* Mobile sidebar overlay with blur effect */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        
        {/* Sidebar */}
        <aside
          id="sidebar"
          className={`
            fixed md:fixed z-50 md:z-50
            h-[calc(100vh)] md:h-[calc(100vh-4rem)]
            ${sidebarMinimized ? 'w-16' : 'w-64'}
            transform transition-all duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0
            bg-muted/90 backdrop-blur-md pt-16 md:pt-0
            border-r border-border/40
          `}
        >
          <div className="flex items-center justify-between p-4 border-b md:hidden bg-primary text-primary-foreground">
            <h2 className="text-lg font-semibold">ENGINE-CALC-ID</h2>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setSidebarOpen(false)}
              className="text-primary-foreground hover:bg-primary/80"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <Sidebar minimized={sidebarMinimized} />
          {/* Minimize/Expand button for desktop */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 -right-3 hidden md:flex h-6 w-6 rounded-full border bg-background shadow-md"
            onClick={() => setSidebarMinimized(!sidebarMinimized)}
          >
            {sidebarMinimized ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            )}
          </Button>
        </aside>
        
        {/* Floating open sidebar button for easy access */}
        <Button
          variant="default"
          size="icon"
          className="fixed bottom-6 left-6 md:left-6 z-40 rounded-full shadow-lg md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        {/* Main content */}
        <main className={`flex-1 p-4 md:p-6 bg-background transition-all duration-300 ${sidebarMinimized ? 'md:pl-20' : 'md:pl-68'}`}>
          {children}
        </main>
      </div>
    </div>
  );
}