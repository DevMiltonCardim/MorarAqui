import { useState } from "react"
import { FaChevronDown, FaSliders } from "react-icons/fa6"
import { FilterSelect } from "./FilterSelect";
import { PriceFilter } from "./PriceFilter";
import { VscChromeClose } from "react-icons/vsc";
import type { IFiltrosAvancados } from "../../../types/propriedade";

interface MaisFiltersProps {
  filtros: IFiltrosAvancados;
  setFiltros: React.Dispatch<React.SetStateAction<IFiltrosAvancados>>;
}

const MaisFilters = ({ filtros, setFiltros }: MaisFiltersProps) => {

  const [isOpen, setIsOpen] = useState(false);

  const updateFiltro = (campo: keyof IFiltrosAvancados, valor: any) => {
    setFiltros(prev => ({
      ...prev,
      [campo]: valor
    }))
  }

  return (
    <div className="px-3 mt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex gap-2 text-md items-center justify-center w-full py-2 rounded-xl border-2 border-[#D87C50] ${isOpen ? 'text-white bg-[#D87C50]' : 'text-[#D87C50]'}`}
      >
        <FaSliders />
        Mais Filtros
        <FaChevronDown
          size={14}
          className={`mt-0.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>
      <div className={`grid transition-all duration-300 ease-in-out p-3 mx-1 ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4 bg-white shadow-md rounded-xl' : 'grid-rows-[0fr] opacity-0 mt-0'
        }`}>
        <div className="overflow-hidden">
          <div className="col-span-2">
            <FilterSelect
              label="Cidade"
              options={["Todas", "Ibirataia", "Ipiaú"]}
              value={filtros.cidade}
              onChange={(novoValor) => updateFiltro('cidade', novoValor)}
            />
          </div>
          <div className="col-span-2 mt-4">
            <FilterSelect
              label="Tipo de Imóvel"
              options={["Todos", "Casa", "Apartamento", "Cobertura", "Mansão", "Terreno", "Comercial"]}
              value={filtros.tipoDeImovel}
              onChange={(novoValor) => updateFiltro('tipoDeImovel', novoValor)}
            />
          </div>
          <div className="col-span-2 mt-4">
            <PriceFilter
              minPrice={filtros.minPrice}
              setMinPrice={(valor) => updateFiltro('minPrice', valor)}
              maxPrice={filtros.maxPrice}
              setMaxPrice={(valor) => updateFiltro('maxPrice', valor)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <FilterSelect
              label="Quartos"
              options={['Qualquer', '1', '2', '3+']}
              value={filtros.quartos === 0 ? 'Qualquer' : `${filtros.quartos}${filtros.quartos === 3 ? '+' : ''}`}
              onChange={(val) => {
                const num = val === 'Qualquer' ? 0 : parseInt(val);
                updateFiltro('quartos', num)
              }}
            />
            <FilterSelect
              label="Banheiros"
              options={['Qualquer', '1', '2', '3+']}
              value={filtros.banheiros === 0 ? 'Qualquer' : `${filtros.banheiros}${filtros.banheiros === 3 ? '+' : ''}`}
              onChange={(val) => {
                const num = val === 'Qualquer' ? 0 : parseInt(val);
                updateFiltro('banheiros', num)
              }}
            />
          </div>
          <div className="col-span-2 mt-4">
            <FilterSelect
              label="Vagas"
              options={["Qualquer", "1+", "2+"]}
              value={filtros.vagas === 0 ? 'Qualquer' : `${filtros.vagas}${filtros.vagas === 3 ? '+' : ''}`}
              onChange={(val) => {
                const num = val === 'Qualquer' ? 0 : parseInt(val);
                updateFiltro('vagas', num)
              }}
            />
          </div>

          <div className="flex flex-col mt-10">
            <button 
              onClick={() => setFiltros({
                cidade: 'Todas', tipoDeImovel: 'Todos', quartos: 0,
                banheiros: 0, vagas: 0, minPrice: '', maxPrice: ''
              })}
              className="flex items-center gap-2 w-full py-2 pl-4 border-2 border-black rounded-md font-semibold text-lg text-black active:bg-gray-100 transition-all"
            >
              <VscChromeClose className="mt-0.5" size={15} />
              Limpar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MaisFilters