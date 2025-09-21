
export interface SidraRawData {
  V: string;  
  D2N: string; 
  D4N: string; 
}


export interface SidraProcessedData {
  mes: string;
  valor: number;
  categoria: string;
}

export type SidraRow = { period: string; value: number };
export type SidraDataset = { name: string; data: SidraRow[]; error?: boolean };
export type SidraCategory = { id: string; name: string };
