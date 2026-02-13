import { listaImoveis } from "../../data/imoveis";
import type { IPropriedade } from "../../types/propriedade";
import { CardPropriets } from "../CardPropriets";

interface CardListProps {
  propriedades: IPropriedade[];
}

export const CardList = ({ propriedades }: CardListProps) => {

  return (
    <div className="mt-4 mx-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {propriedades.map(imovel => (
        <CardPropriets
          key={imovel.id}
          id={imovel.id}
          capa={imovel.capa}
          descricao={imovel.descricao}
          imagens={imovel.imagens}
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