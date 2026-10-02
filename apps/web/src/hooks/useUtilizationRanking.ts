import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type UtilizationRanking = {
  posicao: number;
  veiculoId: number;
  placa: string;
  modelo: string;
  tipo: string;
  kmTotal: number;
  quantidadeViagens: number;
};

export function useUtilizationRanking() {
  return useQuery({
    queryKey: ["getUtilizationRanking"],
    queryFn: async () => {
      const { data } = await axios.get<UtilizationRanking[]>(
        `${process.env.NEXT_PUBLIC_API_URL}/utilization-ranking`,
      );

      return data;
    },
  });
}
