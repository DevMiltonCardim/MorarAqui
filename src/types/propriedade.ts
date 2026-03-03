export interface IFoto {
  id: number;
  urlCompleta: string;
  ordem: number;
}

export interface IPropriedade {
  id: number;
  titulo: string;
  descricao: string;
  preco: number | string;
  area: number;
  quartos?: number;
  banheiros?: number;
  vagas?: number;
  pontoReferencia?: string;
  nomeBairro: string;
  nomeCidade: string;
  nomeAnunciante: string;
  whatsappAnunciante: string;
  tipo: string;
  finalidade: string;
  fotos: IFoto[];
}

export interface IFiltrosAvancados {
  cidade: string;
  cidadeId: number;
  bairroId: number;
  tipoDeImovel: string;
  finalidade: string;
  minPrice: number;
  maxPrice: number;
  quartos: number;
  banheiros: number;
  vagas: number;
}

export interface IImovelGestao extends IPropriedade {
  dataCriacao: string;
}