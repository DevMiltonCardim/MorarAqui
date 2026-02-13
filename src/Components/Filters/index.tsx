import { FaHouseChimney, FaKey } from "react-icons/fa6"
import MaisFilters from "./MaisFilters"
import { useState } from "react"

interface FilterProps {
  isActiveFilter: string;
  setIsActiveFilter: (filter: string) => void;
}

const Filters = ({ isActiveFilter, setIsActiveFilter }: FilterProps) => {

  const getButtonStyles = (filterName: string) => {
    const isActive = isActiveFilter === filterName;
    return `flex flex-1 items-center justify-center py-2 gap-2 border rounded-3xl transition-all duration-300 ease-in-out shadow-md ${
      isActive
        ? 'text-white bg-[#D87C50] border-[#cb6f45]'
        : 'text-gray-700 bg-white border-gray-300'
    }`
  }
  return (
    <section className="flex flex-col pt-6 bg-gray-100">
      <section className="flex items-center gap-4 px-3">
          <button 
            className={`${getButtonStyles('todos')}`} 
            onClick={() => setIsActiveFilter('todos')}
          >
            Todos
          </button>
          <button 
            className={`${getButtonStyles('venda')}`} 
            onClick={() => setIsActiveFilter('venda')}
          >
            <FaHouseChimney />
            Venda
          </button>
          <button 
            className={`${getButtonStyles('aluguel')}`} 
            onClick={() => setIsActiveFilter('aluguel')}
          >
            <FaKey />
            Aluguel
          </button>
      </section>
      <div>
        <MaisFilters />
      </div>
    </section>
  )
}

export default Filters