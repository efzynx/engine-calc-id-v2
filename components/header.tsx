"use client";

import { AuthButton } from "@/components/auth-button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();
  
  // Map pathname to display name
  const getPageTitle = () => {
    if (pathname === "/dashboard") return "Dashboard";
    if (pathname === "/calculators/displacement") return "Engine Displacement";
    if (pathname === "/calculators/valve-size") return "Valve Size";
    if (pathname === "/calculators/compression-ratio") return "Compression Ratio";
    if (pathname === "/calculators/carburetor-size") return "Carburetor Size";
    if (pathname === "/calculators/fuel-ratio") return "Fuel Ratio";
    if (pathname === "/calculators/ignition-timing") return "Ignition Timing";
    if (pathname === "/calculators/gear-ratio") return "Gear Ratio";
    if (pathname === "/calculators/tire-size") return "Tire Size";
    if (pathname === "/calculators/speed") return "Speed Calculator";
    if (pathname === "/calculators/horsepower") return "Horsepower";
    if (pathname === "/calculators/torque") return "Torque";
    if (pathname === "/calculators/power-to-weight") return "Power-to-Weight";
    if (pathname === "/calculators/oil-change") return "Oil Change";
    if (pathname === "/calculators/service") return "Service Intervals";
    if (pathname.startsWith("/auth")) return "Authentication";
    return "Engine Calculator";
  };

  return (
    <header className="w-full bg-primary text-primary-foreground h-16 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="w-full flex justify-between items-center p-3 px-5 text-sm">
        <div className="flex gap-5 items-center font-semibold">
          <div className="flex items-center gap-2">
            <span className="text-xl">
              {getPageTitle()}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <AuthButton />
        </div>
      </div>
    </header>
  );
}