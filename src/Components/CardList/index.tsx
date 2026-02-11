import { listaImoveis } from "../../data/imoveis";
import { CardPropriets } from "../CardPropriets";

export const CardList = () => {

  return (
    <div className="mt-4 mx-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {listaImoveis.map(imovel => (
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