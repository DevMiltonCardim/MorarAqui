import { FaExpand } from "react-icons/fa"
import { FaArrowDown, FaArrowUp, FaClock } from "react-icons/fa6"
import { TbCaretUpDownFilled } from "react-icons/tb"

interface OrdenarProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export const OrdenarLista = ({ activeFilter, setActiveFilter }: OrdenarProps) => {

  const getButtonStyles = (id: string) => {
    const isActive = activeFilter === id;
    return `flex flex-col justify-center items-center py-2 gap-1 rounded-lg transition-all active:scale-95 ${
      isActive 
        ? 'bg-[#e68152] border border-[#ca7750] shadow-md shadow-[#D87C50]/20 text-white' 
        : 'bg-white border border-gray-400 text-gray-700'
    }`;
  }

  return (
    <section className="border-t border-gray-300 pt-8">
      <div className="flex items-center font-medium text-gray-700 gap-1 pl-2 pb-3">
        <TbCaretUpDownFilled className="text-[#B8860B]"/>
        Ordenar:
      </div>
      <section className="grid grid-cols-2 gap-2.5 px-3">

        <button
          className={`${getButtonStyles('recentes')}`}
          onClick={() => setActiveFilter('recentes')}
        >
          <FaClock />
          Recentes
        </button>
        <button
          className={`${getButtonStyles('menor-preco')}`}
          onClick={() => setActiveFilter('menor-preco')}
        >
          <FaArrowDown />
          Menor Preço
        </button>
        <button
          className={`${getButtonStyles('maior-preco')}`}
          onClick={() => setActiveFilter('maior-preco')}
        >
          <FaArrowUp />
          Maior Preço
        </button>
        <button
          className={`${getButtonStyles('maior-area')}`}
          onClick={() => setActiveFilter('maior-area')}
        >
          <FaExpand />
          Maior Área
        </button>
      </section>
    </section>
  )
}