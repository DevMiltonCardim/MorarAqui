import { useState } from "react"
import { CardList } from "../Components/CardList"
import Filters from "../Components/Filters"
import { HeroSection } from "../Components/HeroSection"
import { OrdenarLista } from "../Components/OrdenarLista"
import { listaImoveis } from "../data/imoveis"
import type { IFiltrosAvancados } from "../types/propriedade"

const Home = () => {
  const [filterNegocio, setFilterNegocio] = useState('todos');
  const [orderType, setOrderType] = useState('recentes');

  const [filtrosAvancados, setFiltrosAvancados] = useState<IFiltrosAvancados>({
    cidade: 'Todas',
    tipoDeImovel: 'Todos',
    quartos: 0,
    banheiros: 0,
    vagas: 0,
    minPrice: '',
    maxPrice: '',
  })

  const resultadoFiltrado = listaImoveis.filter((imovel) => {
    const matchNegocio = filterNegocio.toLowerCase() === 'todos' || imovel.negocio.toLowerCase() === filterNegocio.toLowerCase();

    const matchCidade = filtrosAvancados.cidade === 'Todas' || imovel.nomeCidade.includes(filtrosAvancados.cidade);
    const matchTipo = filtrosAvancados.tipoDeImovel === 'Todos' || imovel.tipo.toLowerCase() === filtrosAvancados.tipoDeImovel.toLowerCase();

    const matchQuartos = filtrosAvancados.quartos === 0 || (imovel.quartos ?? 0) >= filtrosAvancados.quartos;
    const matchBanheiros = filtrosAvancados.banheiros === 0 || (imovel.banheiros ?? 0) >= filtrosAvancados.banheiros;
    const matchVagas = filtrosAvancados.vagas === 0 || (imovel.vagas ?? 0) >= filtrosAvancados.vagas;

    const converterParaNumero = (valor: string | number) => {
      if (typeof valor === 'number') return valor; // Se já for número, retorna ele
      if (!valor) return 0;
      // Se for string, limpa e converte
      return parseFloat(valor.replace(/\./g, '').replace(',', '.'));
    };

    const precoLimpo = converterParaNumero(imovel.preco);
    const min = filtrosAvancados.minPrice ? converterParaNumero(filtrosAvancados.minPrice) : 0;
    const max = filtrosAvancados.maxPrice ? converterParaNumero(filtrosAvancados.maxPrice) : Infinity;
    const matchPreco = precoLimpo >= min && precoLimpo <= max;

    return matchNegocio && matchCidade && matchTipo && matchQuartos && matchBanheiros && matchVagas && matchPreco;
  })

  const imoveisExibidos = [...resultadoFiltrado].sort((a, b) => {
    const precoA = typeof a.preco === 'number' ? a.preco : parseFloat(a.preco.replace(/\D/g, '')) / 100;
    const precoB = typeof b.preco === 'number' ? b.preco : parseFloat(b.preco.replace(/\D/g, '')) / 100;

    if (orderType === 'menor-preco') return precoA - precoB;
    if (orderType === 'maior-preco') return precoB - precoA;
    if (orderType === 'maior-area') return (b.area ?? 0) - (a.area ?? 0);
    return b.id - a.id;
  })

  return (
    <main className="bg-gray-50">
      <HeroSection />
      <Filters
        isActiveFilter={filterNegocio}
        setIsActiveFilter={setFilterNegocio}
        filtros={filtrosAvancados}
        setFiltros={setFiltrosAvancados}
      />
      <OrdenarLista
        activeFilter={orderType}
        setActiveFilter={setOrderType}
      />
      <CardList propriedades={imoveisExibidos} />
    </main>
  )
}

export default Home