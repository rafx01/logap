import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type props = {
  vehicleId?: number;
};

export function useTotalKm({ vehicleId }: props) {
  return useQuery({
    queryKey: ["getTotalKm", vehicleId],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/total-km`,
        { params: { vehicleId } },
      );
      return data;
    },
  });
}
