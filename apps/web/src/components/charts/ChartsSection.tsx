import { useGet } from "@/hooks/useGetTest";
import { CategoryVolume } from "./CategoryVolume";
import { MaintenanceSchedule } from "./MaintenanceSchedule";
import { TotalKm } from "./TotalKm";
import { UtilizationRanking } from "./UtilizationRanking";

export function ChartsSection() {
  const gettest = useGet();

  console.log(gettest);

  return (
    <div className=" p-4  w-full  rounded-lg border border-slate-300">
      <p className="text-black font-medium text-lg">Dashboard</p>
      <div className="grid grid-cols-2 gap-y-10 pt-6 px-10">
        <TotalKm />
        <CategoryVolume />
        <MaintenanceSchedule />
        <UtilizationRanking />
      </div>
    </div>
  );
}
