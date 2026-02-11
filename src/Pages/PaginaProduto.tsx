import { Link, useParams } from "react-router-dom";
import { BannerImagemPropriedade } from "../Components/BannerImagemPropriedade";
import { DetalhesImovelContainer } from "../Components/DetalhesImovelContainer";
import { listaImoveis } from "../data/imoveis";
import { FaChevronLeft } from "react-icons/fa6";
import { BiLeftArrowAlt } from "react-icons/bi";

const PaginaProduto = () => {

  const { id } = useParams();

  const imovel = listaImoveis.find((item) => item.id === Number(id));

  if (!imovel) {
    return <div className="p-10 text-center">Imóvel não encontrado.</div>
  }
  // const imovelImages = [
  //   foto1,
  //   foto2,
  // ]

  return (
    <main className="flex flex-col max-w-full bg-gray-50">
      <Link to={"/"}>
        <BiLeftArrowAlt
          size={21}
          className="ml-0.5 mb-1"
        />
      </Link>
      <section className="flex flex-col px-3">
        <BannerImagemPropriedade fotos={imovel.imagens || [imovel.capa]} />
        <DetalhesImovelContainer imovel={imovel} />
      </section>
    </main>
  )
}

export default PaginaProduto;