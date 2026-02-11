import { HiOutlineMapPin } from "react-icons/hi2";
import type { IPropriedade } from "../../types/propriedade";
import { FaBath, FaBed, FaCar, FaLocationDot, FaRulerCombined } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const CardPropriets = ({
  id,
  titulo,
  capa,
  preco,
  localizacao,
  quartos,
  banheiros,
  area,
  vagas,
  tipo,
  negocio
}: IPropriedade) => {
  return (
    <Link to={`/detalhes/${id}`}>
      <div className="h-120 w-full shadow-lg rounded-b-xl">
        <div className={`h-1/2 w-full overflow-hidden relative rounded-t-xl`}>
          <img src={capa} alt={titulo} className="object-cover" />
          <div className="bg-[#D87C50] text-white font-semibold px-3 py-1 absolute top-4 left-4 rounded-lg">
            {negocio === 'venda' ? 'Venda' : 'Aluguel'}
          </div>
        </div>
        <div className="flex flex-col px-4 pt-3 gap-2">
          <div className="flex flex-col gap-2 pb-2">
            <h4 className="font-medium text-lg font-[Noto-Serif-Display]">
              {titulo}
            </h4>
            <p className="flex items-center gap-2 text-gray-500 text-sm">
              <FaLocationDot />
              {localizacao}
            </p>
          </div>
          <div className="flex items-center gap-3 text-gray-500 border-b border-gray-400 pb-4">
            <p className="flex items-center gap-1 text-sm">
              <FaRulerCombined className="text-[#D87C50]" />
              {area}m²
            </p>
            {tipo !== 'terreno' && (
              <>
                <p className="flex items-center gap-1 text-sm">
                  <FaBed className="text-[#D87C50]" />
                  {quartos} Quartos
                </p>
                <p className="flex items-center gap-1 text-sm">
                  <FaBath className="text-[#D87C50]" />
                  {banheiros} Banheiros
                </p>
                <p className="flex items-center gap-1 text-sm">
                  <FaCar className="text-[#D87C50]" />
                  {vagas} Vagas
                </p>
              </>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-[#D87C50] font-[sans-serif]">
              R${preco}
            </h2>
            <button className="w-full py-2 border-2 border-[#D87C50] text-[#D87C50] rounded-md">
              Ver detalhes
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}