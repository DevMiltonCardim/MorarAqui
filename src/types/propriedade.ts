export interface IPropriedade {
  id: number;
  titulo: string;
  descricao: string;
  capa: string;
  imagens?: string[];
  preco: number | string;
  pontoReferencia?: string;
  nomeBairro: string;
  nomeCidade: string;
  quartos?: number;
  banheiros?: number;
  area: number;
  vagas?: number;
  tipo: 'casa' | 'apartamento' | 'terreno' | 'comercial' | 'cobertura';
  negocio: 'venda' | 'aluguel';
}

// Feito para se utilizar nos componentes do Mais Filtros!!!
export interface IFiltrosAvancados {
  cidade: string;
  tipoDeImovel: string;
  quartos: number;
  banheiros: number;
  vagas: number;
  minPrice: string;
  maxPrice: string;
}