import type { IPropriedade } from "../../types/propriedade"

interface DashboardHeaderProps {
  imoveis: IPropriedade[];
}

export const DashboardHeader = ({ imoveis }: DashboardHeaderProps) => {
  const total = imoveis.length;
  const ativos = imoveis.filter(i => i.ativo).length;
  const pausados = imoveis.filter(i => !i.ativo).length;

  const cardStyle = "flex flex-col flex-1 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm";

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <div className={cardStyle}>
        <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Total</span>
        <div className="flex items-end gap-2 mt-2">
          <span className="text-4xl font-bold text-gray-800">{total}</span>
          <span className="text-gray-400 mb-1">imóveis</span>
        </div>
      </div>

      <div className={cardStyle}>
        <span className="text-sm font-medium text-green-600 uppercase tracking-wider">Ativos</span>
        <div className="flex items-end gap-2 mt-2">
          <span className="text-4xl font-bold text-gray-800">{ativos}</span>
          <div className="w-2 h-2 rounded-full bg-green-500 mb-3 animate-pulse"></div>
        </div>
      </div>

      <div className={cardStyle}>
        <span className="text-sm font-medium text-red-600 uppercase tracking-wider">Pausados</span>
        <div className="flex items-end gap-2 mt-2">
          <span className="text-4xl font-bold text-gray-800">{pausados}</span>
          <span className="text-gray-400 mb-1 italic">offline</span>
        </div>
      </div>
    </div>
  )
}