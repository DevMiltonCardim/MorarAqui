import { BannerImagemPropriedade } from "../Components/BannerImagemPropriedade";
import { DetalhesImovelContainer } from "../Components/DetalhesImovelContainer";
import foto1 from '../assets/casa-1.jpg'
import foto2 from '../assets/casa-2.jpg'

const PaginaProduto = () => {

  const imovelImages = [
    foto1,
    foto2,
  ]

  return (
    <main className="flex flex-col max-w-full px-3 bg-gray-50">
      <BannerImagemPropriedade fotos={imovelImages} />
      <DetalhesImovelContainer />
    </main>
  )
}

export default PaginaProduto;