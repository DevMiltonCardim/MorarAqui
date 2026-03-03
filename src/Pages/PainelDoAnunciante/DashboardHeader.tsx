import type { IPropriedade } from "../../types/propriedade"

interface DashboardHeaderProps {
  imoveis: IPropriedade[];
  filtroAtivo: string;
  setFiltroAtivo: (status: 'todos' | 'ativos' | 'pausados') => void;
}

export const DashboardHeader = ({ imoveis, filtroAtivo, setFiltroAtivo }: DashboardHeaderProps) => {
  const total = imoveis.length;
  const ativos = imoveis.filter(i => i.ativo).length;
  const pausados = imoveis.filter(i => !i.ativo).length;

  const baseStyle = "flex flex-col flex-1 p-6 rounded-2xl border-2 transition-all cursor-pointer shadow-sm";
  const activeStyle = "border-[#D87C50] bg-orange-50 scale-105 shadow-md"
  const inactiveStyle = "border-gray-100 bg-white hover: border-gray-200"

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <div
        onClick={() => setFiltroAtivo('todos')}
        className={`${baseStyle} ${filtroAtivo === 'todos' ? activeStyle : inactiveStyle}`}
      >
        <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total</span>
        <div className="flex items-end gap-2 mt-2">
          <span className="text-4xl font-bold text-gray-800">{total}</span>
          <span className="text-gray-400 mb-1">imóveis</span>
        </div>
      </div>

      <div
        onClick={() => setFiltroAtivo('ativos')}
        className={`${baseStyle} ${filtroAtivo === 'ativos' ? activeStyle : inactiveStyle}`}
      >
        <span className="text-sm font-medium text-green-600 uppercase tracking-wider">Ativos</span>
        <div className="flex items-end gap-2 mt-2">
          <span className="text-4xl font-bold text-gray-800">{ativos}</span>
          <div className="w-2 h-2 rounded-full bg-green-500 mb-3 animate-pulse"></div>
        </div>
      </div>

      <div
        onClick={() => setFiltroAtivo('pausados')}
        className={`${baseStyle} ${filtroAtivo === 'pausados' ? activeStyle : inactiveStyle}`}
      >
        <span className="text-sm font-medium text-red-600 uppercase tracking-wider">Pausados</span>
        <div className="flex items-end gap-2 mt-2">
          <span className="text-4xl font-bold text-gray-800">{pausados}</span>
          <span className="text-gray-400 mb-1 italic">offline</span>
        </div>
      </div>
    </div>
  )
}