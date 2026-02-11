export interface IPropriedade {
  id: number;
  titulo: string;
  descricao: string;
  capa: string;
  imagens?: string[];
  preco: string;
  localizacao: string;
  quartos?: number;
  banheiros?: number;
  area: number;
  vagas?: number;
  tipo: 'casa' | 'apartamento' | 'terreno' | 'comercial' | 'cobertura';
  negocio: 'venda' | 'aluguel';
}