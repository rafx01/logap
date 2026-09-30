import { BaseSelect } from "../ui/BaseSelect/BaseSelect";

export function CategoryVolume() {
  return (
    <div className="pl-4 border-l">
      <p>Volume por categoria</p>
      <BaseSelect
        label="Selecione o tipo do veículo"
        placeholder="Selecione o tipo do veículo"
      />
    </div>
  );
}
