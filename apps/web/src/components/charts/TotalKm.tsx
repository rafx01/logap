import { useState } from "react";
import { BaseSelect } from "../ui/BaseSelect/BaseSelect";
import { useAllVehicles } from "@/hooks/useAllVehicles";
import { useTotalKm } from "@/hooks/useTotalKm";

export function TotalKm() {
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(
    null,
  );

  const vehicles = useAllVehicles();

  const totalKm = useTotalKm({
    vehicleId: selectedVehicleId ? Number(selectedVehicleId) : undefined,
  });

  return (
    <div className="">
      <p className="pb-2">Total de quilometragem percorrida</p>
      {vehicles.isLoading ? (
        <p className="pb-2">carregando...</p>
      ) : (
        <div className="flex flex-row gap-x-2">
          <BaseSelect
            items={(vehicles.data ?? []).map((i: any) => ({
              value: String(i.id),
              label: `${i.modelo} (${i.placa})`,
            }))}
            value={selectedVehicleId}
            onChange={setSelectedVehicleId}
            placeholder="Selecione um veículo"
          />
          <button
            className="cursor-pointer"
            onClick={() => setSelectedVehicleId(null)}
          >
            Limpar
          </button>
        </div>
      )}
      <div className="pt-4">
        {totalKm.isLoading ? (
          <p>carregando...</p>
        ) : (
          <p className="text-2xl font-semibold">{totalKm.data?.kmTotal} km</p>
        )}
      </div>
    </div>
  );
}
