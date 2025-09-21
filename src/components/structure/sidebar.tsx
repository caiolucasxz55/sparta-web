"use client";

import { Home, Calendar, BarChart3, FileText, Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigationItems = [
  { icon: Home, href: "/", label: "Home" },
  { icon: Calendar, href: "/calendar", label: "Calendário" },
  { icon: BarChart3, href: "/dashboard", label: "Dashboard" },
  { icon: FileText, href: "/about-us", label: "Sobre nós" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-[#3F4D67] p-2 rounded"
        onClick={() => setOpen(!open)}
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      <div
        className={cn(
          "fixed top-0 left-0 h-full w-48 bg-[#3F4D67] flex flex-col items-center py-6 space-y-6 transform transition-transform duration-300 md:translate-x-0 md:static md:w-16 md:h-screen md:space-y-4 z-40",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div>
          <Image
            src="/sparta-home.png"
            alt="Logo sparta"
            width={40}
            height={40}
            className="rounded-md"
          />
        </div>
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "p-3 rounded-lg transition-colors hover:bg-white/10",
                isActive && "bg-white/20"
              )}
              title={item.label}
            >
              <Icon className="w-6 h-6 text-white" />
            </Link>
          );
        })}
      </div>
    </>
  );
}
