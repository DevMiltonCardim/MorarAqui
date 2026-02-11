import type { IPropriedade } from "../types/propriedade";
import terreno1 from "../assets/terreno1.jpg"
import foto1 from "../assets/casa-2.jpg"

export const listaImoveis: IPropriedade[] = [
    {
      id: 1,
      titulo: "Lote no Condomínio Solar",
      descricao: "Lote grande localizado no bairro novo",
      preco: "150.000,00",
      localizacao: "Bairro Novo - Curitiba",
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
      descricao: "Casa estilo moderna em boa localização na cidade de São Paulo",
      preco: "5.500,00",
      localizacao: "Jardim das Flores - São Paulo",
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