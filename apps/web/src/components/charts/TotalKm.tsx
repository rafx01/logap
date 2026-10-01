import { useTotalKm } from "@/hooks/useTotalKm";
import { BaseSelect } from "../ui/BaseSelect/BaseSelect";

export function TotalKm() {
  const totalKm = useTotalKm({ vehicleId: 1 });

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
