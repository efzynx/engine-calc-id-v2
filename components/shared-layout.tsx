"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { User } from "@supabase/auth-js";

export default function SharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarMinimized, setSidebarMinimized] = useState(true); // Sidebar is minimized by default
  const [sidebarOpen, setSidebarOpen] = useState(false); // Mobile sidebar state
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

  // Close mobile sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      
      if (sidebar && 
          !sidebar.contains(e.target as Node) &&
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
      <div className="flex flex-1">
        {/* Mobile sidebar overlay - only visible when open */}
        <div 
          className={`
            fixed inset-0 z-40 bg-black/30 backdrop-blur-sm
            transition-opacity duration-300 ease-in-out
            md:hidden
            ${sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
          `}
          onClick={() => setSidebarOpen(false)}
        />
        
        {/* Sidebar - Minimized icons on desktop, overlay on mobile */}
        <aside
          id="sidebar"
          className={`
            fixed md:fixed z-50
            h-[calc(100vh)] md:h-[calc(100vh-3.5rem)]
            ${sidebarMinimized ? 'w-16' : 'w-64'}
            transform transition-all duration-300 ease-in-out
            bg-muted/90 backdrop-blur-md
            border-r border-border/40
            top-14 md:top-14
            ${sidebarOpen 
              ? 'translate-x-0' 
              : '-translate-x-full md:translate-x-0'}
            md:block
          `}
        >
          <Sidebar minimized={sidebarMinimized} />
        </aside>
        
        {/* Floating button - mobile overlay toggle, desktop expand/collapse */}
        <Button
          variant="default"
          size="icon"
          className={`
            fixed z-50 rounded-full shadow-lg
            top-20
            transition-all duration-300 ease-in-out
            md:hidden
            ${sidebarOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}
            left-4
          `}
          onClick={() => setSidebarOpen(true)}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
        
        <Button
          variant="default"
          size="icon"
          className={`
            fixed z-50 rounded-full shadow-lg
            top-1/2 -translate-y-1/2
            transition-all duration-300 ease-in-out
            hidden md:flex
            ${sidebarMinimized ? 'left-16' : 'left-64'}
            ml-2
          `}
          onClick={() => setSidebarMinimized(!sidebarMinimized)}
        >
          {sidebarMinimized ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </Button>
        
        {/* Main content */}
        <main className={`flex-1 p-4 md:p-6 bg-background transition-all duration-300 ${sidebarMinimized ? 'md:pl-20' : 'md:pl-68'}`}>
          <div className="pt-14">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}