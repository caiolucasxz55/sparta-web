"use client";

import { useState } from "react";
import { Sidebar } from "@/components/structure/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, Users, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PaginaCalendario() {
 
  const [reunioes, setReunioes] = useState([
    {
      date: "22 de Setembro",
      title: "Reunião com Alpha Investimentos",
      time: "14:00",
      type: "Reunião com Investidor",
    },
    {
      date: "27 de Setembro",
      title: "Sessão de estratégia com Cliente X",
      time: "10:00",
      type: "Reunião com Cliente",
    },
    {
      date: "3 de Outubro",
      title: "Revisão financeira trimestral",
      time: "15:30",
      type: "Revisão Interna",
    },
    {
      date: "8 de Outubro",
      title: "Reunião do conselho - Planejamento Q4",
      time: "09:00",
      type: "Reunião do Conselho",
    },
    {
      date: "15 de Outubro",
      title: "Discussão de parceria com TechCorp",
      time: "13:00",
      type: "Parceria",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    type: "",
  });
  const [showForm, setShowForm] = useState(false);

  const adicionarLembrete = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.time || !formData.type) return;

    const novaReuniao = {
      date: formData.date,
      title: formData.title,
      time: formData.time,
      type: formData.type,
    };
    setReunioes([...reunioes, novaReuniao]);
    setFormData({ title: "", date: "", time: "", type: "" });
    setShowForm(false);
  };

  return (
    <div className="flex min-h-screen bg-[#F3F7FA]">
      <Sidebar />

      <main className="flex-1 p-8">
       
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-sm text-gray-600 mb-4">Calendário</h1>
            <h2 className="text-4xl font-bold text-[#315797]">Agenda de Reuniões</h2>
          </div>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-[#315797] text-white hover:bg-[#3F4D67]"
          >
            <Plus className="w-5 h-5" /> Adicionar Lembrete
          </Button>
        </div>

        
        {showForm && (
          <Card className="mb-8 p-6 bg-white border border-gray-200 shadow-sm max-w-lg">
            <form onSubmit={adicionarLembrete} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Título</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Ex: Reunião com Cliente"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Data</label>
                  <input
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Ex: 25 de Outubro"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Hora</label>
                  <input
                    type="text"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full border border-gray-300 rounded-md p-2"
                    placeholder="Ex: 14:00"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Tipo</label>
                <input
                  type="text"
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full border border-gray-300 rounded-md p-2"
                  placeholder="Ex: Reunião Interna"
                />
              </div>

              <div className="flex justify-end gap-4">
                <Button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="border border-gray-300 text-gray-600 hover:bg-gray-100"
                  variant="outline"
                >
                  Cancelar
                </Button>
                <Button type="submit" className="bg-[#315797] text-white hover:bg-[#3F4D67]">
                  Salvar Lembrete
                </Button>
              </div>
            </form>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <Card className="bg-white shadow-sm border border-gray-200">
            <CardHeader>
              <CardTitle className="text-[#315797] flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Próximas Reuniões
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reunioes.map((reuniao, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#315797] rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{reuniao.title}</h3>
                      <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {reuniao.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {reuniao.time}
                        </span>
                      </div>
                      <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-[#315797] text-xs rounded-full">
                        {reuniao.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm border border-gray-200">
            <CardHeader>
              <CardTitle className="text-[#315797] flex items-center gap-2">
                <Users className="w-5 h-5" />
                Estatísticas de Reuniões
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center p-6 bg-blue-50 rounded-lg mb-6">
                <div className="text-3xl font-bold text-[#315797] mb-2">{reunioes.length}</div>
                <div className="text-gray-600">Total de Reuniões</div>
              </div>
              <p className="text-gray-600 text-sm">
                Adicione lembretes e acompanhe suas reuniões em tempo real.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
