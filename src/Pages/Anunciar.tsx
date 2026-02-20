import { useState } from "react";
import { FormSelect } from "../Components/FormSelect";
import { PriceInput } from "../Components/PriceInput";
import { cidadesRegiao } from "../data/municipios";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Anunciar = () => {
  const [passo, setPasso] = useState(1);
  const [dadosAnuncio, setDadosAnuncio] = useState({
    titulo: '',
    tipo: '',
    negocio: '',
    preco: 0,
    nomeCidade: '',
    nomeBairro: '',
    area: 0,
    banheiros: 0,
    quartos: 0,
    descricao: '',
    fotos: []
  });

  const proximoPasso = () => {
    if (!dadosAnuncio.titulo || !dadosAnuncio.negocio || !dadosAnuncio.tipo || !dadosAnuncio.nomeCidade || !dadosAnuncio.preco) {
      alert("Por favor, preencha os campos principais");
      return;
    }
    setPasso(2);
  }

  const handleAnunciarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados prontos para enviar:", dadosAnuncio);
  }

  const inputsTextStyle = "py-1.5 pl-2 border border-gray-500 rounded-xl shadow-md"

  return (
    <section className="px-3">
      {passo === 1 && (
        <div>
          <h2 className="text-xl font-semibold text-center mb-4 mt-4">
            Conte-nos Sobre o Seu Imóvel
          </h2>
          <div className="flex flex-col">
            <label className="pl-1 text-lg">Título:</label>
            <input
              type="text"
              placeholder="Adicione o titulo do imóvel..."
              required
              className={`${inputsTextStyle}`}
              value={dadosAnuncio.titulo}
              onChange={(e) => setDadosAnuncio({ ...dadosAnuncio, titulo: e.target.value })}
            />
          </div>
          <div className="flex flex-col mt-3">
            <label className="pl-1 text-md">Descrição:</label>
            <input
              type="text"
              placeholder="Adicione a descrição do seu imóvel"
              required
              className={`${inputsTextStyle}`}
              value={dadosAnuncio.descricao}
              onChange={(e) => setDadosAnuncio({ ...dadosAnuncio, descricao: e.target.value })}
            />
          </div>
          <div className="flex gap-2 w-full mt-3">
            <div className="w-1/2">
              <FormSelect
                label="Tipo de Imóvel"
                placeholder="Selecione..."
                options={['Casa', 'Apartamento', 'Kitnet', 'Sobrado']}
                onSelect={(val: string) => setDadosAnuncio({ ...dadosAnuncio, tipo: val })}
              />
            </div>
            <div className="w-1/2">
              <FormSelect
                label="Finalidade"
                placeholder="Selecione..."
                options={['Venda', 'Aluguel']}
                onSelect={(val: string) => setDadosAnuncio({ ...dadosAnuncio, negocio: val })}
              />
            </div>
          </div>
          <div className="mt-3">
            <PriceInput
              label="Preço do Imóvel"
              value={dadosAnuncio.preco}
              onChange={(val: number) => setDadosAnuncio({ ...dadosAnuncio, preco: val })}
            />
          </div>
          <div className="flex gap-2 mt-4">
            <div className="w-1/2">
              <FormSelect
                label="Cidade"
                placeholder="Selecione a cidade"
                options={cidadesRegiao}
                onSelect={(val) => setDadosAnuncio({ ...dadosAnuncio, nomeCidade: val })}
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label className="pl-1 text-sm">Bairro</label>
              <input
                type="text"
                placeholder="Ex: Centro"
                className="py-2.5 pl-4 border border-gray-300 rounded-lg shadow-md"
                value={dadosAnuncio.nomeBairro}
                onChange={(e) => setDadosAnuncio({ ...dadosAnuncio, nomeBairro: e.target.value })}
              />
            </div>
          </div>
          <div className="flex items-center justify-center mt-8">
            <button
              type="button"
              onClick={proximoPasso}
              className="bg-[#D87C50] text-white px-16 py-3 rounded-xl font-bold hover:bg-[#b5653f] transition-colors"
            >
              Próximo passo: Detalhes
            </button>
          </div>
        </div>
      )}

      {passo === 2 && (
        <div className="flex flex-col gap-6 animate-in slide-in-from-right duration-500">
          <h2 className="text-2xl font-bold text-center mt-8">Detalhes do imóvel</h2>

          {dadosAnuncio.tipo !== 'Terreno' ? (
            <div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <FormSelect
                    label="Quartos"
                    placeholder="Selecione..."
                    options={['1', '2', '3+']}
                    onSelect={(v) => { }}
                  />
                </div>
                <div className="w-1/2">
                  <FormSelect
                    label="Banheiros"
                    placeholder="Selecione..."
                    options={['1', '2', '3+']}
                    onSelect={(v) => { }}
                  />
                </div>
              </div>
              <div className="mt-4">
                <FormSelect
                  label="Vagas"
                  placeholder="Selecione..."
                  options={['1', '2', '3+']}
                  onSelect={(v) => { }}
                />
              </div>
            </div>
          ) : ''}

          <div className="flex flex-col gap-2 mt-4">
            <label className="pl-1 text-sm font-medium text-gray-700">Área</label>
            <div className="flex items-center w-full border border-gray-300 rounded-xl shadow.md px-4 py-2.5 bg-white focus-within:border-[#D87C50] focus-within:ring-1 focus-within:ring-[#D87C50] transition-all">
              <input
                type="number"
                placeholder="Ex: 150"
                className="w-full outline-none text-gray-900 placeholder:text-gray-400 bg-transparent font-medium"
                value={dadosAnuncio.area}
                onChange={(e) => {
                  const val = e.target.value === '' ? 0 : Number(e.target.value)
                  setDadosAnuncio({ ...dadosAnuncio, area: val });
                }}
              />
              <span className="text-gray-500 font-bold ml-2 border-l pl-2 border-gray-200">
                m²
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-6">
            <label className="pl-1 text-sm font-medium text-gray-700">Fotos do Imóvel</label>
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 hover:border-[#D87C50] transition-all cursor-pointer relative">
              <input
                type="file"
                multiple
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={(e) => {
                  console.log(e.target.files);
                }}
              />

              <div className="flex flex-col items-center gap-2">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                <p className="text-gray-600 font-medium">Clique ou arraste as fotos aqui</p>
                <p className="text-xs text-gray-400">PNG, JPG, ou JPEG (Max. 5MB cada)</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setPasso(1)}
              className="flex items-center justify-center gap-2 w-1/2 bg-[#456077] text-white py-3 rounded-xl font-bold hover:bg-[#3e556a] transition-colors"
            >
              <FaArrowLeft />
              Voltar
            </button>
            <button className="flex items-center justify-center gap-2 w-1/2 bg-[#D87C50] text-white py-3 rounded-xl font-bold hover:bg[#b5653f] transition-colors">
              Avançar
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Anunciar;