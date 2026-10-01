import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type props = {
  category?: string | null;
};

export type CategoryVolume = {
  vehicleCategory: string;
  totalTrips: number;
};

export function useCategoryVolume({ category }: props) {
  return useQuery({
    queryKey: ["getCategoryVolume", category],
    queryFn: async () => {
      const { data } = await axios.get<CategoryVolume[]>(
        `${process.env.NEXT_PUBLIC_API_URL}/category-volume`,
        { params: { category: category ?? undefined } },
      );

      return data;
    },
  });
}
