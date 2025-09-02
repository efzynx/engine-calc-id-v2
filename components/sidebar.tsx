"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  Car, 
  Gauge, 
  Zap,
  Wrench,
  RotateCcw
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Gauge,
  },
  {
    title: "Engine Calculators",
    icon: Car,
    subItems: [
      { title: "Displacement", href: "/calculators/displacement" },
      { title: "Valve Size", href: "/calculators/valve-size" },
      { title: "Compression Ratio", href: "/calculators/compression-ratio" },
      { title: "Carburetor Size", href: "/calculators/carburetor-size" },
      { title: "Fuel Ratio", href: "/calculators/fuel-ratio" },
      { title: "Ignition Timing", href: "/calculators/ignition-timing" },
    ],
  },
  {
    title: "Wheel & Gear",
    icon: RotateCcw,
    subItems: [
      { title: "Gear Ratio", href: "/calculators/gear-ratio" },
      { title: "Tire Size", href: "/calculators/tire-size" },
      { title: "Speed Calculator", href: "/calculators/speed" },
    ],
  },
  {
    title: "Performance",
    icon: Zap,
    subItems: [
      { title: "Horsepower", href: "/calculators/horsepower" },
      { title: "Torque", href: "/calculators/torque" },
      { title: "Power-to-Weight", href: "/calculators/power-to-weight" },
    ],
  },
  {
    title: "Maintenance",
    icon: Wrench,
    subItems: [
      { title: "Oil Change", href: "/calculators/oil-change" },
      { title: "Service Intervals", href: "/calculators/service" },
    ],
  },
];

export function Sidebar({ className, minimized = false }: { className?: string; minimized?: boolean }) {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  // Automatically open the menu containing the current page
  useEffect(() => {
    const currentMenu = menuItems.find(item => 
      item.subItems?.some(subItem => subItem.href === pathname)
    );
    
    if (currentMenu) {
      setOpenMenus(prev => ({
        ...prev,
        [currentMenu.title]: true
      }));
    }
  }, [pathname]);

  const toggleMenu = (title: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  if (minimized) {
    return (
      <div className={cn("pb-12 bg-muted/50 h-full overflow-y-auto flex flex-col items-center py-4", className)}>
        {menuItems.map((item) => (
          <div key={item.title} className="mb-2">
            {item.subItems ? (
              <Collapsible
                open={openMenus[item.title] || false}
                onOpenChange={() => toggleMenu(item.title)}
                className="space-y-1 flex flex-col items-center"
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "h-10 w-10",
                      (pathname === item.href || (item.subItems && item.subItems.some(sub => pathname.startsWith(sub.href)))) 
                        ? "bg-accent text-accent-foreground" 
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1 mt-1 flex flex-col items-center">
                  {item.subItems.map((subItem) => (
                    <Link key={subItem.href} href={subItem.href}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={cn(
                          "h-10 w-10",
                          pathname === subItem.href ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted"
                        )}
                      >
                        <span className="text-xs">{subItem.title.charAt(0)}</span>
                      </Button>
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Link href={item.href || "/dashboard"}>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-10 w-10",
                    pathname === item.href ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                </Button>
              </Link>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={cn("pb-12 bg-muted/50 h-full overflow-y-auto", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <div key={item.title}>
                {item.subItems ? (
                  <Collapsible
                    open={openMenus[item.title] || false}
                    onOpenChange={() => toggleMenu(item.title)}
                    className="space-y-1"
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-between font-medium",
                          (pathname === item.href || (item.subItems && item.subItems.some(sub => pathname.startsWith(sub.href)))) 
                            ? "bg-accent text-accent-foreground" 
                            : "text-foreground hover:bg-muted"
                        )}
                      >
                        <div className="flex items-center">
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.title}
                        </div>
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform",
                          openMenus[item.title] ? "rotate-180" : ""
                        )} />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1 pl-4">
                      {item.subItems.map((subItem) => (
                        <Link key={subItem.href} href={subItem.href}>
                          <Button
                            variant="ghost"
                            className={cn(
                              "w-full justify-start pl-8",
                              pathname === subItem.href ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted"
                            )}
                          >
                            {subItem.title}
                          </Button>
                        </Link>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <Link href={item.href || "/dashboard"}>
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start font-medium",
                        pathname === item.href ? "bg-accent text-accent-foreground" : "text-foreground hover:bg-muted"
                      )}
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      {item.title}
                    </Button>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}