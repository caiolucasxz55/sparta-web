import { SidraDataset } from "@/types/sidra";

const requestTimestamps: number[] = [];
const MAX_REQUESTS = 5;
const TIME_WINDOW = 3000; 

function isRateLimited(): boolean {
  const now = Date.now();
 
  while (requestTimestamps.length && now - requestTimestamps[0] > TIME_WINDOW) {
    requestTimestamps.shift();
  }
  if (requestTimestamps.length >= MAX_REQUESTS) {
    return true;
  }
  requestTimestamps.push(now);
  return false;
}

export async function fetchSidraData(table: any, categoryId?: string): Promise<SidraDataset[]> {
  const cacheKey = `${table.id}-${categoryId}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) return JSON.parse(cached);

  if (isRateLimited()) {
    console.warn("Rate limit atingido. Tente novamente em alguns segundos.");
    return [{ name: table.name, data: [], error: true }];
  }

  try {
    const filter = table.hasCategories && categoryId ? `/${table.filter}/${categoryId}` : "";
    const url = `https://apisidra.ibge.gov.br/values/t/${table.id}/n1/all/v/all/p/all${filter}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Erro ao buscar ${table.name}`);
    const json = await res.json();

    const parsed = json
      .slice(1)
      .map((d: any) => {
        const period = d.D2N || d.D3N || d.Mes || d.Ano || d.D2C;
        const value = parseFloat((d.V || "").replace(",", ".").trim());
        return { period, value: isNaN(value) ? null : value };
      })
      .filter((d: any) => d.value !== null && d.period);

    const limited = parsed.slice(-500);
    const result = [{ name: table.name, data: limited }];
    localStorage.setItem(cacheKey, JSON.stringify(result));
    return result;
  } catch {
    return [{ name: table.name, data: [], error: true }];
  }
}
