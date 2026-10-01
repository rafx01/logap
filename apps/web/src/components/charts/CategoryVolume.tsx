import { useState } from "react";
import { BaseSelect } from "../ui/BaseSelect/BaseSelect";
import { useCategoryVolume } from "@/hooks/useCategoryVolume";

const categories = [
  {
    label: "Leve",
    value: "LEVE",
  },
  {
    label: "Pesado",
    value: "PESADO",
  },
];

export function CategoryVolume() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const volume = useCategoryVolume({ category: selectedCategory });

  return (
    <div className="pl-4 border-l">
      <p className="pb-2">Volume por categoria</p>
      <div className="flex flex-row gap-x-2">
        <BaseSelect
          items={categories}
          onChange={setSelectedCategory}
          value={selectedCategory}
          placeholder="Selecione o tipo do veículo"
        />
        {selectedCategory && (
          <button
            className="cursor-pointer"
            onClick={() => {
              setSelectedCategory(null);
            }}
          >
            Limpar
          </button>
        )}
      </div>
      <div className="pt-4">
        {volume.isLoading ? (
          <p>carregando...</p>
        ) : (
          <>
            <div className="flex flex-row justify-between text-sm">
              <p>Categoria</p>
              <p>Viagens concluídas</p>
            </div>
            {volume.data?.map((i) => (
              <div
                key={i.vehicleCategory}
                className="bg-slate-200 justify-between flex flex-row mt-2 px-2 rounded-lg"
              >
                <p>
                  {categories.find((c) => c.value === i.vehicleCategory)
                    ?.label ?? i.vehicleCategory}
                </p>
                <p>{i.totalTrips}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
