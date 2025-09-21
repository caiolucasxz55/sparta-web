import { SidraCategory } from "@/types/sidra";

export const tables = [
  { id: 6723, name: "IPP - Grupos Industriais", filter: "c844", hasCategories: true },
  { id: 6903, name: "IPP - Indústria Geral", filter: "", hasCategories: false },
  { id: 6904, name: "IPP - Grandes Categorias Econômicas", filter: "", hasCategories: false },
  { id: 1736, name: "INPC - Série Histórica", filter: "", hasCategories: false },
  { id: 7063, name: "INPC - Variação Mensal", filter: "", hasCategories: false },
  { id: 118, name: "IPCA Dessazonalizado", filter: "", hasCategories: false },
  { id: 1737, name: "IPCA - Série Histórica", filter: "", hasCategories: false },
  { id: 6691, name: "IPCA - Variações Acumuladas", filter: "", hasCategories: false },
  { id: 7060, name: "IPCA - Variação Mensal", filter: "", hasCategories: false },
  { id: 7061, name: "IPCA Dessazonalizado Variações", filter: "", hasCategories: false },
];

export const defaultCategories: SidraCategory[] = [
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
