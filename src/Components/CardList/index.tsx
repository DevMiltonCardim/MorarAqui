import type { IPropriedade } from "../../types/propriedade";
import { CardPropriets } from "../CardPropriets";

interface CardListProps {
  propriedades: IPropriedade[];
}

export const CardList = ({ propriedades }: CardListProps) => {

  return (
    <div className="mt-4 mx-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {propriedades.map(imovel => (
        <CardPropriets key={imovel.id} {...imovel} />
      ))}

      {propriedades.length === 0 && (
        <p>
          Nenhum imóvel encontrado.
        </p>
      )}
    </div>
  )
}