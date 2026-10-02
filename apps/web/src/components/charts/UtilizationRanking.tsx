import { useUtilizationRanking } from "@/hooks/useUtilizationRanking";

export function UtilizationRanking() {
  const ranking = useUtilizationRanking();

  return (
    <div className="pl-4 border-l">
      <p className="pb-2">Ranking de utilização dos veículos</p>

      {ranking.isLoading ? (
        <p>carregando...</p>
      ) : (
        <>
          <div className="grid grid-cols-[2rem_1fr_auto_auto] gap-x-4 text-sm px-2">
            <p>#</p>
            <p>Veículo</p>
            <p className="text-right">Viagens</p>
            <p className="text-right">Quilometragem</p>
          </div>
          {ranking?.data?.map((i) => (
            <div
              key={i.veiculoId}
              className="bg-slate-200 grid grid-cols-[2rem_1fr_auto_auto] gap-x-4 mt-2 px-2 rounded-lg"
            >
              <p>{i.posicao}º</p>
              <p>
                {i.modelo}{" "}
                <span className="text-xs text-slate-600">{i.placa}</span>
              </p>
              <p className="text-right">{i.quantidadeViagens}</p>
              <p className="text-right">
                {i.kmTotal.toLocaleString("pt-BR")} km
              </p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
