import { useEffect, useState } from "react";

interface ICidade {
  id: number;
  nome: string;
}

export const useCidades = () => {
  const [cidades, setCidades] = useState<ICidade[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/29/municipios')
      .then((res) => res.json())
      .then((data: any[]) => {
        const nomesDesejados = [
          "Jequié", "Ibirataia", "Ipiaú", "Jitaúna", "Gandu",
          "Ubatã", "Barra do Rocha", "Ubaitaba"
        ];

        const listaFiltrada = data
          .filter((c) => nomesDesejados.includes(c.nome))
          .map((c) => ({ id: c.id, nome: c.nome }));

        const listaFinal: ICidade[] = [...listaFiltrada, { id: 9999, nome: "Algodão" }]
          .sort((a, b) => a.nome.localeCompare(b.nome));

        setCidades(listaFinal);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro IBGE:", err);
        setError("Não foi possível carregar as cidades.")
        setLoading(false);
      });
  }, []);

  return { cidades, loading, error };
}