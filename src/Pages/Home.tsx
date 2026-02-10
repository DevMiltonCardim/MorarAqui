import { CardList } from "../Components/CardList"
import Filters from "../Components/Filters"
import { HeroSection } from "../Components/HeroSection"
import { OrdenarLista } from "../Components/OrdenarLista"

const Home = () => {
  return (
    <main className="bg-gray-50">
      <HeroSection />
      <Filters />
      <OrdenarLista />
      <CardList />
    </main>
  )
}

export default Home