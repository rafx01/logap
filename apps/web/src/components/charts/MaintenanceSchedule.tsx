import { useMaintenanceSchedule } from "@/hooks/useMaintenances";

function formatDate(date: string) {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
}

export function MaintenanceSchedule() {
  const maintenance = useMaintenanceSchedule();

  return (
    <div className="pr-2">
      <p className="pb-2">Cronograma de manutenção</p>

      <div className="h-full">
        {maintenance.isLoading ? (
          <p>carregando...</p>
        ) : !maintenance.data?.length ? (
          <p className="text-sm">Nenhuma manutenção pendente</p>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-x-2 text-sm">
              <p>Veículo</p>
              <p>Serviço</p>
              <p>Início</p>
              <p className="text-right">Custo estimado</p>
            </div>
            {maintenance.data.map((i) => (
              <div
                key={i.id}
                className="bg-slate-200 grid grid-cols-4 gap-x-2 mt-2 px-2 rounded-lg"
              >
                <p>
                  {i.modelo}{" "}
                  <span className="text-xs text-slate-600">{i.placa}</span>
                </p>
                <p>{i.tipoServico}</p>
                <p>{formatDate(i.dataInicio)}</p>
                <p className="text-right">{i.custoEstimado} R$</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
