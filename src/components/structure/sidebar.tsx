"use client"

import { Home, Calendar, BarChart3, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

const navigationItems = [
  { icon: Home, href: "/", label: "Home" },
  { icon: Calendar, href: "/calendar", label: "Calendar" },
  { icon: BarChart3, href: "/dashboard", label: "Dashboard" },
  { icon: FileText, href: "/about-us", label: "Sobre nós" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-16 h-screen bg-[#3F4D67] flex flex-col items-center py-4 space-y-4">
      <div className="mb-4">
       <Image
                src="/sparta-logo.png"
                alt="Logo sparta"
                width={40}
                height={40}
                className="rounded-md"
              />
      </div>


      {navigationItems.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn("p-3 rounded-lg transition-colors hover:bg-white/10", isActive && "bg-white/20")}
            title={item.label}
          >
            <Icon className="w-6 h-6 text-white" />
          </Link>
        )
      })}
    </div>
  )
}
