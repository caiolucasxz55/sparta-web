"use client";

import { Home, Calendar, BarChart3, FileText, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const navigationItems = [
  { icon: Home, href: "/", label: "Início" },
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
        className="fixed top-4 left-4 z-50 bg-[#3F4D67] p-2 rounded-md text-white lg:hidden"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menu"
      >
        <Menu className="w-6 h-6" />
      </button>

  
      <div
        className={cn(
          "fixed top-0 left-0 h-screen w-56 bg-[#3F4D67] flex flex-col items-center py-6 space-y-6 transform transition-transform duration-300 lg:translate-x-0 lg:static lg:w-16",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
     
        <div className="mb-4">
          <Image
            src="/sparta-home.png"
            alt="Logo Sparta"
            width={40}
            height={40}
            className="rounded-md"
          />
        </div>


        <nav className="flex flex-col items-center space-y-6">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg text-white transition-colors hover:bg-white/10 lg:gap-0 lg:justify-center",
                  isActive && "bg-white/20"
                )}
                title={item.label}
                onClick={() => setOpen(false)} 
              >
                <Icon className="w-6 h-6" />
                <span className="lg:hidden">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

     
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
