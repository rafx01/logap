import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type FinancialProjection = {
  mes: string;
  custoTotal: number;
  quantidadeManutencoes: number;
};

export function useFinancialProjection() {
  return useQuery({
    queryKey: ["getFinancialProjection"],
    queryFn: async () => {
      const { data } = await axios.get<FinancialProjection>(
        `${process.env.NEXT_PUBLIC_API_URL}/financial-projection`,
      );

      return data;
    },
  });
}
