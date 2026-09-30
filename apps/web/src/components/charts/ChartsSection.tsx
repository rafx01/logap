import { CategoryVolume } from "./CategoryVolume";
import { MaintenanceSchedule } from "./MaintenanceSchedule";
import { TotalKm } from "./TotalKm";

export function ChartsSection() {
  return (
    <div className=" p-4  w-full  rounded-lg border border-slate-300">
      <p className="text-black font-medium text-lg">Dashboard</p>
      <div className="grid grid-cols-2 gap-y-10 pt-6 px-10">
        <TotalKm />
        <CategoryVolume />
        <MaintenanceSchedule />
      </div>
    </div>
  );
}
