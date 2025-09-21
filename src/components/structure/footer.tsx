"use client";

import { FaLinkedin, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image"
export default function Footer() {
    return (
        <footer className="bg-[#F3F7FA] text-[#3F4D67] border-t mt-10">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

                <div className="flex flex-col items-start space-y-4">

                    <Image
                        src="/sparta-logo.png"
                        alt="Logo sparta"
                        width={40}
                        height={40}
                        className="rounded-md"
                    />

                    <div>
                        <p className="font-semibold">Endereço</p>
                        <p className="text-sm">
                            R. Fidêncio Ramos, 213 – Cj.61 <br />
                            São Paulo – SP <br />
                            Tel.: (11) 5054-4700 <br />
                            contato@sparta.com.br
                        </p>
                    </div>

                    <div className="flex space-x-4 mt-2">
                        <a href="#" aria-label="LinkedIn" className="hover:text-[#315797]">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="#" aria-label="Facebook" className="hover:text-[#315797]">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" aria-label="Instagram" className="hover:text-[#315797]">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" aria-label="YouTube" className="hover:text-[#315797]">
                            <FaYoutube size={20} />
                        </a>
                    </div>
                </div>


                <div>
                    <h3 className="font-semibold mb-3">Invista Agora</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[#315797]">Através de uma corretora</a></li>
                    </ul>
                    <h3 className="font-semibold mt-6 mb-3">Acesse</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[#315797]">Disclaimer</a></li>
                        <li><a href="#" className="hover:text-[#315797]">Área do Cliente BNYMellon</a></li>
                    </ul>
                </div>


                <div>
                    <h3 className="font-semibold mb-3">Fundos</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-[#315797]">Crédito Privado</a></li>
                        <li><a href="#" className="hover:text-[#315797]">Previdências</a></li>
                        <li><a href="#" className="hover:text-[#315797]">Multimercados</a></li>
                        <li><a href="#" className="hover:text-[#315797]">Listados em bolsa</a></li>
                        <li><a href="#" className="hover:text-[#315797]">Todos os Fundos</a></li>
                    </ul>
                </div>


                <div className="flex flex-col space-y-4">
                </div>
            </div>


            <div className="bg-[#3F4D67] text-white text-center text-sm py-3">
                Sparta Fundos de Investimento © {new Date().getFullYear()}
            </div>
        </footer>
    );
}
