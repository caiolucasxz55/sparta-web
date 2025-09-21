"use client";

import { useState } from "react";
import {LineChart,Line,BarChart,Bar,XAxis,YAxis,CartesianGrid,Tooltip,Legend,ResponsiveContainer,Label,} from "recharts";

interface SidraChartProps {
  title: string;
  data: { period: string; value: number }[];
  firstPeriod: string;
  lastPeriod: string;
}

export default function SidraChart({ title, data, firstPeriod, lastPeriod }: SidraChartProps) {
  const [viewMode, setViewMode] = useState<"linear" | "log">("linear");
  const [chartType, setChartType] = useState<"line" | "bar">("line");

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex flex-wrap gap-4 items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-[#3F4D67]">{title}</h2>
        <p className="text-sm text-gray-600">Período exibido: {firstPeriod} - {lastPeriod}</p>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode(viewMode === "linear" ? "log" : "linear")}
            className="px-3 py-1 bg-[#315797] text-white rounded"
          >
            {viewMode === "linear" ? "Escala Logarítmica" : "Escala Linear"}
          </button>
          <button
            onClick={() => setChartType(chartType === "line" ? "bar" : "line")}
            className="px-3 py-1 bg-[#3F4D67] text-white rounded"
          >
            {chartType === "line" ? "Usar Barras" : "Usar Linhas"}
          </button>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        {chartType === "line" ? (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period">
              <Label value="Período" offset={-5} position="insideBottom" />
            </XAxis>
            <YAxis scale={viewMode} domain={["auto", "auto"]}>
              <Label value="Índice" angle={-90} position="insideLeft" />
            </YAxis>
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#315797"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        ) : (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="period">
              <Label value="Período" offset={-5} position="insideBottom" />
            </XAxis>
            <YAxis scale={viewMode} domain={["auto", "auto"]}>
              <Label value="Índice" angle={-90} position="insideLeft" />
            </YAxis>
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#315797" />
          </BarChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
