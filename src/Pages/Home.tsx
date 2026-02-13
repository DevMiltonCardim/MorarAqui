import { useState } from "react"
import { CardList } from "../Components/CardList"
import Filters from "../Components/Filters"
import { HeroSection } from "../Components/HeroSection"
import { OrdenarLista } from "../Components/OrdenarLista"
import { listaImoveis } from "../data/imoveis"

const Home = () => {
  const [filterNegocio, setFilterNegocio] = useState('todos');

  const imoveisFiltrados = listaImoveis.filter((imovel) => {
    if (filterNegocio === 'todos') return true;
    return imovel.negocio === filterNegocio;
  });

  return (
    <main className="bg-gray-50">
      <HeroSection />
      <Filters 
        isActiveFilter={filterNegocio}
        setIsActiveFilter={setFilterNegocio}
      />
      <OrdenarLista />
      <CardList propriedades={imoveisFiltrados}/>
    </main>
  )
}

export default Home