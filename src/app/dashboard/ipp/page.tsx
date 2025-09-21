"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "@/components/structure/sidebar";
import SidraChart from "@/components/sidraChart";
import { fetchSidraData } from "@/lib/sidra-data";

const tables = [
  { id: 6723, name: "IPP - Grupos Industriais", filter: "c844", hasCategories: true },
  { id: 6903, name: "IPP - Indústria Geral", filter: "", hasCategories: false },
  { id: 6904, name: "IPP - Grandes Categorias Econômicas", filter: "", hasCategories: false },
];

const categories = [
  { id: "47180", name: "Abate e carne" },
  { id: "47181", name: "Óleos e gorduras" },
  { id: "47182", name: "Laticínios" },
  { id: "47183", name: "Moagem e alimentos" },
  { id: "47184", name: "Açúcar" },
  { id: "47185", name: "Torrefação de café" },
  { id: "47186", name: "Curtimento de couro" },
  { id: "47187", name: "Calçados" },
  { id: "47188", name: "Químicos inorgânicos" },
  { id: "47189", name: "Resinas e elastômeros" },
];

export default function IPPDashboard() {
  const [selectedTable, setSelectedTable] = useState(tables[0].id.toString());
  const [selectedCategory, setSelectedCategory] = useState("47180");
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const router = useRouter();

  useEffect(() => {
    async function load() {
      setLoading(true);
      const table = tables.find(t => t.id.toString() === selectedTable);
      if (!table) return;

      const categoryId = table.hasCategories ? selectedCategory || "47180" : undefined;
      const res = await fetchSidraData(table, categoryId);
      setData(res[0]?.data || []);
      setLoading(false);
    }
    load();
  }, [selectedTable, selectedCategory]);

  const toggleSort = () => {
    setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));
  };

  const sortedData = [...data].sort((a, b) =>
    sortOrder === "asc" ? a.period.localeCompare(b.period) : b.period.localeCompare(a.period)
  );

  const firstPeriod = sortedData[0]?.period || "-";
  const lastPeriod = sortedData[sortedData.length - 1]?.period || "-";

  return (
    <div className="flex bg-[#F3F7FA] text-[#3F4D67] min-h-screen">
      <Sidebar />
      <div className="flex-1 p-4 space-y-6">

        <button
          onClick={() => router.push("/dashboard")}
          className="px-4 py-2 bg-[#315797] text-white rounded hover:bg-[#3F4D67] transition-colors"
        >
          ← Voltar ao Dashboard
        </button>

        <h1 className="text-2xl font-bold text-[#3F4D67] mb-4">IPP - Índice de Preços ao Produtor</h1>

        <div className="flex flex-wrap items-center gap-4 bg-white text-[#315797] p-4 rounded-lg">

          <div>
            <label className="mr-2 font-semibold">Tabela:</label>
            <select
              value={selectedTable}
              onChange={(e) => setSelectedTable(e.target.value)}
              className="p-2 rounded border-2 border-[#315797] text-black focus:outline-none"
            >
              {tables.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          {tables.find((t) => t.id.toString() === selectedTable)?.hasCategories && (
            <div>
              <label className="mr-2 font-semibold">Categoria:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="p-2 rounded border-2 border-[#315797] text-black focus:outline-none"
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          )}


          <button
            onClick={toggleSort}
            className="p-2 rounded border-2 border-[#315797] text-[#315797] focus:outline-none"
          >
            Ordenar ({sortOrder === "asc" ? "Crescente" : "Decrescente"})
          </button>
        </div>



        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#315797]"></div>
          </div>
        ) : sortedData.length === 0 ? (
          <p className="text-red-500">Erro ou falta de dados. Selecione uma categoria válida.</p>
        ) : (
          <>
            <SidraChart
              title={tables.find(t => t.id.toString() === selectedTable)?.name || ""}
              data={sortedData}
              firstPeriod={firstPeriod}
              lastPeriod={lastPeriod}
            />

            <div className="overflow-auto mt-6">
              <button
                onClick={toggleSort}
                className="mb-2 px-3 py-1 border rounded bg-[#315797] text-white"
              >
                Ordenar ({sortOrder === "asc" ? "Crescente" : "Decrescente"})
              </button>
              <table className="min-w-full text-sm text-left border">
                <thead className="bg-[#315797] text-white">
                  <tr>
                    <th className="px-2 py-1 border">Período</th>
                    <th className="px-2 py-1 border">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedData.map((row, i) => (
                    <tr
                      key={i}
                      className={i % 2 === 0 ? "bg-white" : "bg-[#F3F7FA]"}
                    >
                      <td className="px-2 py-1 border">{row.period}</td>
                      <td className="px-2 py-1 border">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
