import { useTotalKm } from "@/hooks/useTotalKm";
import { BaseSelect } from "../ui/BaseSelect/BaseSelect";
import { useAllVehicles } from "@/hooks/useAllVehicles";

export function TotalKm() {
  const vehicles = useAllVehicles();

  console.log("vehicles:: ", vehicles);

  //const totalKm = useTotalKm({ vehicleId: 1 });

  return (
    <div className="">
      <p>Total de quilometragem percorrida</p>
      <BaseSelect
        label="Selecione um veículo"
        placeholder="Selecione um veículo"
      />
    </div>
  );
}
