"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BarChart3, TrendingUp, TrendingDown } from "lucide-react";
import { Sidebar } from "@/components/structure/sidebar";

const cards = [
  {
    title: "IPP - Índice de Preços ao Produtor",
    description: "Análises e séries históricas dos índices de preços ao produtor.",
    icon: <BarChart3 className="w-12 h-12 text-white" />,
    href: "/dashboard/ipp",
    color: "bg-[#3F4D67]",
  },
  {
    title: "INPC - Índice Nacional de Preços ao Consumidor",
    description: "Dados e variações acumuladas do INPC.",
    icon: <TrendingUp className="w-12 h-12 text-white" />,
    href: "/dashboard/inpc",
    color: "bg-[#315797]",
  },
  {
    title: "IPCA - Índice de Preços ao Consumidor Amplo",
    description: "Informações detalhadas e gráficos sobre o IPCA.",
    icon: <TrendingDown className="w-12 h-12 text-white" />,
    href: "/dashboard/ipca",
    color: "bg-[#3F4D67]",
  },
];

export default function DashboardMain() {
  return (
    <div className="flex bg-[#F3F7FA] min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col items-center justify-start py-16 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3F4D67] pb-16 mb-10 text-center">
          Dashboard - Indicadores Econômicos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full justify-items-center">
          {cards.map((card, idx) => (
            <Link key={idx} href={card.href} className="w-full flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`rounded-2xl shadow-xl cursor-pointer flex flex-col items-center text-center ${card.color}`}
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  height: "280px",
                  padding: "24px",
                }}
              >
                <div className="mb-6">{card.icon}</div>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
                  {card.title}
                </h2>
                <p className="text-[#F3F7FA] text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
