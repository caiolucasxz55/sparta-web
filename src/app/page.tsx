import { Sidebar } from "@/components/structure/sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-[#F3F7FA]">
      <Sidebar />

      <main className="flex-1 p-8">
      
        <div className="mb-8">
          <h1 className="text-sm text-gray-600 mb-4">Início</h1>
          <h2 className="text-6xl font-bold text-[#315797] mb-8">This is SPARTA!</h2>
        </div>

     
        <Card className="bg-white shadow-sm border border-gray-200 max-w-4xl">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-[#315797] mb-6">Mural de Avisos</h3>

            <ul className="space-y-3 text-gray-700 mb-8">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>O mercado de ações está em alta hoje.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Reunião agendada com investidores às 15h.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>
                  Novo anúncio de parceria em breve.{" "}
                  <Link href="#" className="text-[#315797] underline hover:text-blue-800">
                    Veja aqui.
                  </Link>
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>
                  Integração de cliente concluída com sucesso.{" "}
                  <Link href="#" className="text-[#315797] underline hover:text-blue-800">
                    Veja aqui.
                  </Link>
                </span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                <span>Os relatórios financeiros do 3º trimestre estão disponíveis para análise.</span>
              </li>
            </ul>

        
            <div className="flex justify-center">
              <Button
                variant="outline"
                className="px-8 py-2 border-2 border-gray-300 text-[#315797] hover:bg-[#315797] hover:text-white transition-colors bg-transparent"
              >
                Mais Avisos
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
