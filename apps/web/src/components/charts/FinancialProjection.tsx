import { useFinancialProjection } from "@/hooks/useFinancialProjection";

export function FinancialProjection() {
  const projection = useFinancialProjection();

  return (
    <div className="col-span-2 border-t pt-6">
      <p className="pb-2">Projeção financeira</p>

      {projection.isLoading ? (
        <p>carregando...</p>
      ) : (
        projection.data && (
          <div className="flex flex-row gap-x-10">
            <div>
              <p className="text-sm">Custo estimado de manutenções</p>
              <p className="text-2xl font-semibold">
                {projection.data.custoTotal.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
            <div>
              <p className="text-sm">Manutenções</p>
              <p className="text-2xl font-semibold">
                {projection.data.quantidadeManutencoes}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}
