const a = [
  {
    title: "Corsa",
    km: 10000,
  },
  {
    title: "Celta",
    km: 15000,
  },
  {
    title: "Palio",
    km: 2500,
  },
];

export function UtilizationRanking() {
  return (
    <div className="pl-4 border-l">
      <p>Ranking de utilização dos veículos</p>
      <div className="flex flex-row justify-between text-sm pt-2">
        <p>Veículo</p>
        <p>Quilometragem</p>
      </div>
      {a.map((i) => (
        <div
          key={i.title}
          className="bg-slate-200 justify-between flex flex-row mt-2 px-2 rounded-lg"
        >
          <p>{i.title}</p>
          <p>{i.km}</p>
        </div>
      ))}
    </div>
  );
}
