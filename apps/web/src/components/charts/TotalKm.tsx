import { BaseSelect } from "../ui/BaseSelect/BaseSelect";

export function TotalKm() {
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
