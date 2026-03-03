import { useEffect, useMemo, useState } from "react"
import { CardList } from "../Components/CardList"
import Filters from "../Components/Filtros"
import { HeroSection } from "../Components/HeroSection"
import { OrdenarLista } from "../Components/OrdenarLista"
import type { IFiltrosAvancados, IPropriedade } from "../types/propriedade"
import { api } from "../services/api"
import { useCidades } from "../hooks/useCidades"

const Home = () => {
  const [imoveis, setImoveis] = useState<IPropriedade[]>([]);
  const [filterNegocio, setFilterNegocio] = useState('todos');
  const [orderType, setOrderType] = useState('recentes');
  const { cidades } = useCidades();
  
  const [filtrosAvancados, setFiltrosAvancados] = useState<IFiltrosAvancados>({
    cidade: 'Todas',
    cidadeId: 0, 
    bairroId: 0,         
    tipoDeImovel: 'Todos',
    minPrice: 0,         
    maxPrice: 0,        
    quartos: 0,           
    banheiros: 0,         
    vagas: 0,
    finalidade: 'todos',   
  });


  useEffect(() => {
    const cidadeSelecionada = cidades.find(c => c.nome === filtrosAvancados.cidade);
    
    const params: any = {};

    if (cidadeSelecionada && filtrosAvancados.cidade !== 'Todas') {
      params.cidadeId = cidadeSelecionada.id;
    }

    if (filterNegocio !== 'todos') {
      params.finalidade = filterNegocio.toUpperCase(); 
    }

    if (filtrosAvancados.tipoDeImovel !== 'Todos') {
      params.tipo = filtrosAvancados.tipoDeImovel.toUpperCase();
    }

    if (filtrosAvancados.maxPrice && filtrosAvancados.maxPrice > 0) {
      params.precoMax = filtrosAvancados.maxPrice;
    }

    if (filtrosAvancados.quartos > 0) {
      params.quartos = filtrosAvancados.quartos;
    }

    const temFiltros = Object.keys(params).length > 0;
    const endpoint = temFiltros ? '/imoveis/busca' : '/imoveis';

    api.get(endpoint, { params })
      .then(res => {
        const listaDeImoveis = res.data.content || []; 
        setImoveis(listaDeImoveis);
    })
    .catch(err => {
      console.error("Erro ao buscar da API:", err);
      setImoveis([]); 
    });
  }, [filterNegocio, filtrosAvancados, cidades]);


  const imoveisExibidos = useMemo(() => {

    const lista = Array.isArray(imoveis) ? [...imoveis] : [];

    if (lista.length === 0) return [];

    const parsePreco = (preco: string | number): number => {
      if (typeof preco === 'number') return preco;
      return parseFloat(preco.replace(/[^\d,]/g, '').replace(',', '.'));
    };
    
    return lista.sort((a, b) => {
      const precoA = parsePreco(a.preco);
      const precoB = parsePreco(b.preco);

      if (orderType === 'menor-preco') return precoA - precoB;
      if (orderType === 'maior-preco') return precoB - precoA;
      if (orderType === 'maior-area') return (b.area ?? 0) - (a.area ?? 0);
      return b.id - a.id;
    });
  }, [imoveis, orderType]);

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