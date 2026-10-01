import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useAllVehicles() {
  return useQuery({
    queryKey: ["getAllVehicles"],
    queryFn: async () => {
      const { data } = await axios.get(`${process.env.API_URL}/vehicles`);
      console.log(`LOG ENV:::  ${process.env.API_URL}/vehicles`);

      return data;
    },
  });
}
