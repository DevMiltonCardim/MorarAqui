import { FaCarAlt } from "react-icons/fa"
import { FaBed, FaCalendarCheck, FaLocationDot } from "react-icons/fa6"
import { FiShare2 } from "react-icons/fi"

export const DetalhesImovelContainer = () => {

  const SubtituloStyles = "text-2xl font-semibold font-[Playfair-Display]"
  const informacoesImovelStyles = "flex items-center pl-2 bg-gray-200 rounded-lg gap-3"

  return (
    <section className="flex flex-col mt-4 p-3 bg-white shadow-lg rounded-lg">
      <div className="flex gap-4 pb-2">
        <div className="py-1 px-2 bg-[#D87C50] text-white text-sm rounded-2xl">
          Venda
        </div>
        <div className="py-1 px-2 bg-[#D87C50] text-white text-sm rounded-2xl">
          Disponivel
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-5">
        <h3 className="font-[Playfair-Display] text-2xl">
          Casa Antiga no Perto da Saida de Ipiaú
        </h3>
        <p className="flex items-center text-gray-600 gap-1 text-sm">
          <FaLocationDot size={18} />
          Ipiaú - Saida Para Jitaúna
        </p>
      </div>
      <div className="flex gap-3 pb-5">
        <button className="flex items-center justify-center gap-2 px-10 py-3 text-white bg-[#D87C50] rounded-lg">
          <FaCalendarCheck />
          <span className="text-sm">
            Agendar Visita
          </span>
        </button>
        <button className="flex items-center justify-center gap-2 px-6 py-3 text-[#D87C50] bg-white border-2 border-[#D87C50] rounded-lg">
          <FiShare2 />
          <span className="text-sm">
            Compartilhar
          </span>
        </button>
      </div>

      <div className="flex flex-col bg-gray-100 gap-2 pl-3 pt-3 pb-7 rounded-lg">
        <p className="text-gray-400">Valor</p>
        <h3 className="text-[#D87C50] text-2xl font-semibold font-[Roboto]">R$200.000,00</h3>
      </div>

      <section className="flex flex-col gap-5 pt-8">
        <h2 className={`${SubtituloStyles}`}>Características</h2>

        <section className="flex flex-col gap-3 pb-8">
          <div className={`${informacoesImovelStyles}`}>
            <FaBed size={22} className="text-[#D87C50]" />
            <div className="flex flex-col py-1.5">
              <p className="text-lg font-semibold">4</p>
              <p className="text-gray-500 text-sm">Quartos</p>
            </div>
          </div>
          <div className={`${informacoesImovelStyles}`}>
            <FaCarAlt size={22} className="text-[#D87C50]" />
            <div className="flex flex-col py-1.5">
              <p className="text-lg font-semibold">2</p>
              <p className="text-gray-500 text-sm">Vagas</p>
            </div>
          </div>
        </section>
      </section>

      <div className="flex flex-col gap-3 pb-8">
        <h2 className={`${SubtituloStyles}`}>
          Descrição
        </h2>

        <p className="text-gray-600 text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eaque eveniet provident qui corporis tempore deleniti quos soluta ullam porro asperiores optio consectetur explicabo quod, repellendus architecto itaque, dicta blanditiis!
        </p>
      </div>

      <div className="border-t border-b border-gray-400 mb-6">
        <h2 className={`${SubtituloStyles} pt-8`}>
          Informações
        </h2>
        <section className="flex flex-col gap-3 pb-6 pt-4">
          <div className={`${informacoesImovelStyles} py-1.5`}>
            <div className="flex flex-col gap-0.5">
              <p className="text-sm">
                Tipo de imóvel:
              </p>
              <p className="text-gray-500 text-sm">
                Casa
              </p>
            </div>
          </div>
          <div className={`${informacoesImovelStyles} py-1.5`}>
            <div className="flex flex-col gap-0.5">
              <p className="text-sm">
                Tipo de imóvel:
              </p>
              <p className="text-gray-500 text-sm">
                Casa
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}