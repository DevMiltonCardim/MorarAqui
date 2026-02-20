import type { IPropriedade } from "../types/propriedade";
import terreno1 from "../assets/terreno1.jpg"
import foto1 from "../assets/casa-2.jpg"

export const listaImoveis: IPropriedade[] = [
    {
      id: 1,
      titulo: "Lote no Condomínio Solar",
      descricao: "Lote grande localizado no bairro novo",
      preco: 150000.00,
      pontoReferencia: "Atrás do Banco do Brasil",
      nomeBairro: "AABB",
      nomeCidade: "Ipiaú",
      area: 360,
      vagas: 0,
      tipo: "terreno",
      negocio: "venda",
      capa: terreno1,
      quartos: 0,
      banheiros: 0
    },
    {
      id: 2,
      titulo: "Casa Moderna com Piscina",
      descricao: "Casa estilo moderna em boa localização na cidade de Ibirataia",
      preco: 5500.00,
      pontoReferencia: "Próximo a caixa lotérica",
      nomeBairro: "Centro",
      nomeCidade: "Ibirataia",
      area: 200,
      vagas: 2,
      tipo: "casa",
      negocio: "aluguel",
      capa: foto1,
      imagens: [
        "../assets/casa-2.jpg",
        "../assets/casa-1.jpg"
      ],
      quartos: 3,
      banheiros: 2
    }
  ];