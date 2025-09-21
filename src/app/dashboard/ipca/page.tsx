"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "@/components/structure/sidebar";
import SidraChart from "@/components/sidraChart";
import { fetchSidraData } from "@/lib/sidra-data";
import { useRouter } from "next/navigation";

const ipcaTables = [
  { id: 1737, name: "IPCA - Série Histórica" },
  { id: 7060, name: "IPCA - Variação Mensal" },
  { id: 118, name: "IPCA Dessazonalizado" },
];

export default function IPCADashboard() {
  const [selectedTable, setSelectedTable] = useState(ipcaTables[0].id.toString());
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    const router = useRouter();

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await fetchSidraData({ id: selectedTable, name: ipcaTables.find(t => t.id.toString() === selectedTable)?.name }, "");
      setData(res[0].data || []);
      setLoading(false);
    }
    load();
  }, [selectedTable]);

  const toggleSort = () => {
    setSortOrder(prev => (prev === "asc" ? "desc" : "asc"));
  };


  const sortedData = [...data].sort((a, b) =>
    sortOrder === "asc" ? a.period.localeCompare(b.period) : b.period.localeCompare(a.period)
  );
  const firstPeriod = sortedData[0]?.period || "";
  const lastPeriod = sortedData[sortedData.length - 1]?.period || "";

  return (
    <div className="flex bg-[#F3F7FA] text-[#3F4D67] min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6 space-y-6">
        <button
          onClick={() => router.push("/dashboard")}
          className="px-4 py-2 bg-[#315797] text-white rounded hover:bg-[#3F4D67] transition-colors"
        >
          ← Voltar ao Dashboard
        </button>

        <h1 className="text-2xl font-bold text-[#3F4D67]">IPCA - Índice Nacional de Preços ao Consumidor Amplo</h1>

       <div className="flex flex-wrap items-center gap-4 bg-white text-[#315797] p-4 rounded-lg">
   
          <div>
            <label className="mr-2 font-semibold">Tabela:</label>
            <select
              value={selectedTable}
              onChange={(e) => setSelectedTable(e.target.value)}
              className="p-2 rounded border-2 border-[#315797] text-black focus:outline-none"
            >
              {ipcaTables.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

       
          <button
            onClick={toggleSort}
            className="p-2 rounded border-2 border-[#315797] text-[#315797] focus:outline-none"
          >
            Ordenar ({sortOrder === "asc" ? "Crescente" : "Decrescente"})
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#315797]" />
          </div>
        ) : (
          <>
            <SidraChart title={ipcaTables.find(t => t.id.toString() === selectedTable)?.name || ""} data={sortedData} firstPeriod={firstPeriod} lastPeriod={lastPeriod} />
            <section className="bg-white rounded shadow p-4">
              <h3 className="font-semibold mb-2">Dados detalhados</h3>
              <div className="overflow-auto">
                <table className="min-w-full border text-sm">
                  <thead className="bg-[#315797] text-white">
                    <tr>
                      <th className="px-3 py-2 border">Período</th>
                      <th className="px-3 py-2 border">Valor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedData.map((r, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F3F7FA]"}>
                        <td className="px-3 py-2 border">{r.period}</td>
                        <td className="px-3 py-2 border">{r.value}</td>
                      </tr>
                    ))}
                    {sortedData.length === 0 && (
                      <tr>
                        <td colSpan={2} className="text-center py-3">Sem dados</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
}
