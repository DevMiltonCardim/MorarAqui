import { Link, useParams } from "react-router-dom";
import { BannerImagemPropriedade } from "../Components/BannerImagemPropriedade";
import { DetalhesImovelContainer } from "../Components/DetalhesImovelContainer";
import { FaChevronLeft } from "react-icons/fa6";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import type { IPropriedade } from "../types/propriedade";

const PaginaProduto = () => {

  const { id } = useParams();
  const [imovel, setImovel] = useState<IPropriedade | null>(null);
  const [loading, setLoading] = useState(true);
  
  const urlsDasFotos = imovel?.imagens
    ? imovel.imagens.sort((a, b) => a.ordem - b.ordem).map(f => f.url)
    : [imovel?.capa || ""];

  useEffect(() => {
    api.get(`/imoveis/${id}`)
      .then(response => {
        setImovel(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Erro ao buscar:", error);
        setLoading(false)
      });
  }, [id]);

  if (loading) return <div>Carregando...</div>
  if (!imovel) {
    return <div className="p-10 text-center">Imóvel não encontrado.</div>
  }

  return (
    <main className="flex flex-col max-w-full bg-gray-50">
      <Link to={"/"}>
        <BiLeftArrowAlt
          size={21}
          className="ml-0.5 mb-1"
        />
      </Link>
      <section className="flex flex-col px-3">
        <BannerImagemPropriedade fotos={urlsDasFotos} />
        <DetalhesImovelContainer imovel={imovel} />
      </section>
    </main>
  )
}

export default PaginaProduto;