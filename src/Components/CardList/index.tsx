import type { IPropriedade } from "../../types/propriedade";
import { CardPropriets } from "../CardPropriets";
import foto1 from "../../assets/casa-2.jpg";
import terreno1 from "../../assets/terreno1.jpg";

export const CardList = () => {

  const listaImoveis: IPropriedade[] = [
    {
      id: 1,
      titulo: "Lote no Condomínio Solar",
      preco: "150.000,00",
      localizacao: "Bairro Novo, Curitiba",
      area: 360,
      vagas: 0,
      tipo: "terreno",
      negocio: "venda",
      imagem: terreno1,
      quartos: 0,
      banheiros: 0
    },
    {
      id: 2,
      titulo: "Casa Moderna com Piscina",
      preco: "5.500,00",
      localizacao: "Jardim das Flores, São Paulo",
      area: 200,
      vagas: 2,
      tipo: "casa",
      negocio: "aluguel",
      imagem: foto1,
      quartos: 3,
      banheiros: 2
    }
  ];

  return (
    <div className="mt-4 mx-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {listaImoveis.map(imovel => (
        <CardPropriets
          key={imovel.id}
          id={imovel.id}
          imagem={imovel.imagem}
          titulo={imovel.titulo}
          localizacao={imovel.localizacao}
          preco={imovel.preco}
          area={imovel.area}
          vagas={imovel.vagas}
          quartos={imovel.quartos}
          banheiros={imovel.banheiros}
          tipo={imovel.tipo}
          negocio={imovel.negocio}
        />
      ))}

      {listaImoveis.length === 0 && (
        <p>
          Nenhum imóvel encontrado.
        </p>
      )}
    </div>
  )
}