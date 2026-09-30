export function Header() {
  return (
    <div className="flex flex-row bg-[#0072b1] px-10 py-4 border-b border-slate-700">
      <div className="flex text-sm items-center  flex-row justify-between flex-1">
        <p className="text-2xl font-extrabold text-white">LogiTrack Pro</p>
        <nav>
          <button onClick={() => {}} className="text-white">
            Módulo de viagens
          </button>
        </nav>
      </div>
    </div>
  );
}
