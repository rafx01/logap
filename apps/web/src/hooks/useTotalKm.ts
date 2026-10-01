import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type props = {
  vehicleId?: number;
};

export function useTotalKm({ vehicleId }: props) {
  return useQuery({
    queryKey: ["getTotalKm"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.API_URL}/total-km?vehicleId=${vehicleId}`,
      );
      return data;
    },
  });
}
