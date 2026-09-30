import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGet() {
  return useQuery({
    queryKey: ["teste"],
    queryFn: async () => {
      const { data } = await axios.get("https://httpbin.org/get");
      return data;
    },
  });
}
