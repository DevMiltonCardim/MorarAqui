import { useState } from "react"
import { FaChevronDown, FaSliders } from "react-icons/fa6"
import { FilterSelect } from "./FilterSelect";
import { PriceFilter } from "./PriceFilter";
import { VscChromeClose } from "react-icons/vsc";
import { IoSearchSharp } from "react-icons/io5";

const MaisFilters = () => {

  const [isOpen, setIsOpen] = useState(false);

  const [cidade, setCidade] = useState('Todas');
  const [tipoDeImovel, setTipoDeImovel] = useState('Todos');
  const [quartos, setQuartos] = useState('Qualquer');
  const [banheiros, setBanheiros] = useState('Qualquer');
  const [vagas, setVagas] = useState('Qualquer');

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

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
              value={cidade}
              onChange={setCidade}
            />
          </div>
          <div className="col-span-2 mt-4">
            <FilterSelect
              label="Tipo de Imóvel"
              options={["Todos", "Casa", "Apartamento", "Cobertura", "Mansão", "Terreno", "Comercial"]}
              value={tipoDeImovel}
              onChange={setTipoDeImovel}
            />
          </div>
          <div className="col-span-2 mt-4">
            <PriceFilter 
              minPrice={minPrice}
              setMinPrice={setMinPrice}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <FilterSelect
              label="Quartos"
              options={['Qualquer', '1', '2', '3+']}
              value={quartos}
              onChange={setQuartos}
            />
            <FilterSelect
              label="Banheiros"
              options={['Qualquer', '1', '2', '3+']}
              value={banheiros}
              onChange={setBanheiros}
            />
          </div>
          <div className="col-span-2 mt-4">
            <FilterSelect
              label="Vagas"
              options={["Qualquer", "1+", "2+"]}
              value={vagas}
              onChange={setVagas}
            />
          </div>

          <div className="flex flex-col gap-4 mt-10">
            <button 
              onClick={() => {
                setQuartos('Qualquer');
                setBanheiros('Qualquer');
                setVagas('Qualquer');
                setCidade('Todas');
                setTipoDeImovel('Todos');
                setMinPrice("");
                setMaxPrice("");
              }}
              className="flex items-center gap-2 w-full py-2 pl-4 border-2 border-black rounded-md font-semibold text-lg text-black active:bg-gray-100 transition-all"
            >
              <VscChromeClose className="mt-0.5" size={15} />
              Limpar
            </button>
            <button 
              onClick={() => {
                console.log("Iniciando busca com:", {quartos, banheiros, vagas, minPrice, maxPrice });
              }}
              className="flex items-center gap-2 w-full py-2 pl-4 bg-[#D87C50] rounded-md font-semibold text-lg text-white shadow-lg shadow-[#D87C50]/20"
            >
              <IoSearchSharp className="mt-0.5"/>
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MaisFilters