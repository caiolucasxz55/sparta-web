"use client";

import Image from "next/image";
import { Sidebar } from "@/components/structure/sidebar";

export default function AboutUs() {
  return (
    <div className="flex bg-[#F3F7FA] min-h-screen text-white">
  
      <Sidebar />


      <div className="flex-1 flex flex-col  items-center">
   
        <div className="w-full flex flex-col items-center py-8 bg-[#3F4D67]">
          <Image
            src="/sparta-home.png"
            alt="Sparta Logo"
            width={120}
            height={120}
            className="mb-4"
          />
        </div>

        <div className="w-full bg-[#3F4D67] py-16 px-8 md:px-16">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
            SPARTA
          </h1>


          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-lg leading-relaxed">
            <p>
              Com mais de 30 anos de mercado, mais de 200 mil investidores e R$
              17 bilhões sob gestão, a Sparta é uma das maiores especialistas em
              renda fixa e crédito privado do Brasil. Nossa equipe é composta
              por profissionais com formação de excelência e com as mais
              reconhecidas certificações de mercado. Temos uma forte cultura de
              partnership, que traz um grande alinhamento entre profissionais e
              Sparta, gerando baixíssima rotatividade. Entendemos que isso seja
              muito importante para conseguirmos entregar os resultados de longo
              prazo que nossos fundos se propõem. Atualmente contamos com 37
              profissionais, sendo 14 deles sócios.
            </p>
            <p>
              Nossa grade de produtos da Renda Fixa Crédito Privado é composta
              por estratégias pós-fixadas, indexadas à inflação curta e
              prefixadas, com fundos de investimentos, fundos previdenciários e
              fundos listados em bolsa. Esses produtos são pensados para
              diferentes públicos: temos fundos para investidores em geral,
              qualificados, alocadores, fundos de pensão, operadoras de saúde e
              seguradoras. Ou seja, conseguimos oferecer o produto mais eficiente
              de acordo com a demanda e necessidade de diferentes públicos. A
              Sparta está sempre em busca de maior eficiência para seus
              parceiros e investidores, seja criando produtos inovadores, seja
              fazendo gestão de mandatos exclusivos bem customizados.
            </p>
          </div>

          <div className="mt-12 text-center text-xl font-semibold tracking-wide">
            THIS IS SPARTA!
          </div>
        </div>
      </div>
    </div>
  );
}
