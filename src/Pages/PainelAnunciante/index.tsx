import { useEffect, useState } from "react";
import { listaImoveis } from "../../data/imoveis";
import type { IPropriedade } from "../../types/propriedade";
import ImovelGestaoCard from "./ImovelGestaoCard";
import { DashboardHeader } from "./DashboardHeader";
import { api } from "../../services/api";

const PainelAnunciante = () => {
  const [meusImoveis, setMeusImoveis] = useState<IPropriedade[]>(
    listaImoveis.filter(imovel => imovel.userId === 1)
  );

  const [filtroStatus, setFiltroStatus] = useState<'todos' | 'ativos' | 'pausados'>('todos');

  useEffect(() => {
    const carregarMeusImoveis = async () => {
      try {
        const response = await api.get('/imoveis/meus');
        setMeusImoveis(response.data);
      } catch (err) {
        console.error("Erro ao carregar seus anúncios", err);
      }
    };

    carregarMeusImoveis();
  }, [])
  const imveisExibidos = meusImoveis.filter(imovel => {
    if (filtroStatus === 'ativos') return imovel.ativo === true;
    if (filtroStatus === 'pausados') return imovel.ativo === false;
    return true;
  })

  const handleToggleStatus = (id: number) => {
    setMeusImoveis(prev => prev.map(imovel =>
      imovel.id === id
        ? { ...imovel, ativo: !imovel.ativo }
        : imovel
    ))
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Tem certeza que deseja excluir este anúncio?")) {
      setMeusImoveis(prev => prev.filter(imovel => imovel.id !== id));
    }
  };

  return (
    <main className="p-6 max-w-7xl mx-auto bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-sm font-bold text-[#e2ba81] uppercase">
            Painel do Anunciante
          </h2>
          <h2 className="text-4xl font-[serif]">
            Meus Imóveis
          </h2>
        </div>
        <button className="bg-[#D87C50] text-white uppercase px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-[#c66a42] transition-all">
          + Novo Imóvel
        </button>
      </div>
      <DashboardHeader imoveis={meusImoveis} filtroAtivo={filtroStatus} setFiltroAtivo={setFiltroStatus} />

      <div className="flex flex-col gap-4">
        {imveisExibidos.map(imovel => (
          <ImovelGestaoCard
            key={imovel.id}
            imovel={imovel}
            onToggleStatus={handleToggleStatus}
            onEdit={(id) => console.log("Editas", id)}
            onDelete={(id) => console.log("Deletar", id)}
          />
        ))}

        {/* {meusImoveis.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed">
            <p>Você ainda não possui imóveis cadastrados.</p>
          </div>
        )} */}
      </div>
    </main>
  )
}

export default PainelAnunciante;