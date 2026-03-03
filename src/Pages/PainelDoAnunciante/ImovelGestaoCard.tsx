import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import { FaBed, FaCarSide } from "react-icons/fa6";
import { IoPause, IoPlay } from "react-icons/io5";
import { TfiRulerAlt2 } from "react-icons/tfi";
import type { IPropriedade } from "../../types/propriedade";

interface ImovelGestaoCardProps {
  imovel: IPropriedade;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onToggleStatus: (id: number) => void;
}

const ImovelGestaoCard = ({ imovel, onEdit, onDelete, onToggleStatus }: ImovelGestaoCardProps) => {
  const styleInformacaoImovel = 'flex items-center gap-1 text-gray-500 text-sm'

  const isAtivo = imovel.ativo;

  return (
    <section
      className={`
        flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-white border rounded-2xl shadow-sm transition-all 
      `}
    >
      <div>
        <img
          src={imovel.capa}
          alt={imovel.titulo}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <div className="flex gap-2">
            <h3 className="font-semibold ">{imovel.titulo}</h3>
            <div className={`flex items-center justify-center px-2 py-1 rounded-lg text-[12px] font-medium ${imovel.ativo === false ? 'bg-gray-100 text-gray-500' : 'bg-green-100 text-green-600'}`}>
              {isAtivo ? 'ATIVO' : 'PAUSADO'}
            </div>
          </div>
          <div className="flex items-center gap-1">
            <p className={`${styleInformacaoImovel}`}>{imovel.nomeBairro},</p>
            <p className={`${styleInformacaoImovel}`}>{imovel.nomeCidade}</p>
            <span className="text-gray-400">-</span>
            <p className={`${styleInformacaoImovel}`}>{imovel.tipo}</p>
          </div>
          <div className="flex items-center gap-10">
            <p className={`${styleInformacaoImovel}`}><FaBed className="mt-1" />{imovel.quartos}q</p>
            <p className={`${styleInformacaoImovel}`}><FaCarSide className="mt-1" />{imovel.vagas}v</p>
            <p className={`${styleInformacaoImovel}`}><TfiRulerAlt2 className="mt-1" />{imovel.area}m²</p>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold">
            R$ {imovel.preco.toLocaleString('pt-BR')}
          </h3>
          <p className="text-xs text-gray-500">
            {imovel.negocio === 'venda' ? 'Total' : '/mês'}
          </p>
          <div className="flex gap-2">
            <button 
              className="border-2 border-gray-700 rounded-lg p-2"
              onClick={() => onToggleStatus(imovel.id)}
            >
              {isAtivo ? <IoPause /> : <IoPlay />}
            </button>
            <button 
              className="border-2 border-gray-700 rounded-lg p-2"
              onClick={() => onEdit(imovel.id)}
            >
              <FaPencilAlt className="p-0.5" />
            </button>
            <button 
              className="border-2 border-gray-700 rounded-lg p-2"
              onClick={() => onDelete(imovel.id)}
            >
              <FaRegTrashAlt />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImovelGestaoCard;