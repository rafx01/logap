import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type Maintenance = {
  id: number;
  veiculoId: number;
  placa: string;
  modelo: string;
  dataInicio: string;
  dataFinalizacao: string | null;
  tipoServico: string;
  custoEstimado: number;
  status: string;
};

export function useMaintenanceSchedule() {
  return useQuery({
    queryKey: ["getMaintenanceSchedule"],
    queryFn: async () => {
      const { data } = await axios.get<Maintenance[]>(
        `${process.env.NEXT_PUBLIC_API_URL}/maintenance-schedule`,
      );

      return data;
    },
  });
}
