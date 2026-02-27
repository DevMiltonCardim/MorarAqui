import { useState } from "react";
import { FormSelect } from "../Components/FormSelect";
import { PriceInput } from "../Components/PriceInput";
import { cidadesRegiao } from "../data/municipios";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { api } from "../services/api";

interface IFormData {
  titulo: string;
  tipo: string;
  negocio: string;
  preco: number;
  nomeCidade: string;
  nomeBairro: string;
  area: number;
  banheiros: number;
  quartos: number;
  vagas: number;
  descricao: string;
  fotos: File[]; // explicitly an array of File objects
}

const Anunciar = () => {
  const [passo, setPasso] = useState(1);
  const [formData, setFormData] = useState<IFormData>({
    titulo: '',
    tipo: '',
    negocio: '',
    preco: 0,
    nomeCidade: '',
    nomeBairro: '',
    area: 0,
    banheiros: 0,
    quartos: 0,
    vagas: 0,
    descricao: '',
    fotos: []
  });

  const proximoPasso = () => {
    if (!formData.titulo || !formData.negocio || !formData.tipo || !formData.nomeCidade || !formData.preco) {
      alert("Por favor, preencha os campos principais");
      return;
    }
    setPasso(2);
  }

  const handleCadastrarImovel = async () => {
    const data = new FormData();

    data.append('titulo', formData.titulo);
    data.append('descricao', formData.descricao);
    data.append('tipo', formData.tipo.toLowerCase());
    data.append('negocio', formData.negocio.toLowerCase());
    data.append('preco', String(formData.preco));
    data.append('nomeCidade', formData.nomeCidade);
    data.append('nomeBairro', formData.nomeBairro);
    data.append('area', String(formData.area));
    data.append('quartos', String(formData.quartos));
    data.append('banheiros', String(formData.banheiros));
    data.append('vagas', String(formData.vagas));
    data.append('userId', String(localStorage.getItem('@MorarAqui:userId')));

    formData.fotos.forEach((file) => {
      data.append('fotos', file);
    });

    try {
      await api.post('/imoveis/cadastrar', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert("Imóvel cadastrado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
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
              value={formData.titulo}
              onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
            />
          </div>
          <div className="flex flex-col mt-3">
            <label className="pl-1 text-md">Descrição:</label>
            <input
              type="text"
              placeholder="Adicione a descrição do seu imóvel"
              required
              className={`${inputsTextStyle}`}
              value={formData.descricao}
              onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
            />
          </div>
          <div className="flex gap-2 w-full mt-3">
            <div className="w-1/2">
              <FormSelect
                label="Tipo de Imóvel"
                placeholder="Selecione..."
                options={['Casa', 'Apartamento', 'Kitnet', 'Sobrado']}
                onSelect={(val: string) => setFormData({ ...formData, tipo: val })}
              />
            </div>
            <div className="w-1/2">
              <FormSelect
                label="Finalidade"
                placeholder="Selecione..."
                options={['Venda', 'Aluguel']}
                onSelect={(val: string) => setFormData({ ...formData, negocio: val })}
              />
            </div>
          </div>
          <div className="mt-3">
            <PriceInput
              label="Preço do Imóvel"
              value={formData.preco}
              onChange={(val: number) => setFormData({ ...formData, preco: val })}
            />
          </div>
          <div className="flex gap-2 mt-4">
            <div className="w-1/2">
              <FormSelect
                label="Cidade"
                placeholder="Selecione a cidade"
                options={cidadesRegiao}
                onSelect={(val) => setFormData({ ...formData, nomeCidade: val })}
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label className="pl-1 text-sm">Bairro</label>
              <input
                type="text"
                placeholder="Ex: Centro"
                className="py-2.5 pl-4 border border-gray-300 rounded-lg shadow-md"
                value={formData.nomeBairro}
                onChange={(e) => setFormData({ ...formData, nomeBairro: e.target.value })}
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

          {formData.tipo.toLowerCase() !== 'terreno' ? (
            <div>

              <div className="flex gap-4">
                <div className="w-1/2">
                  <FormSelect
                    label="Quartos"
                    placeholder="Selecione..."
                    options={['1', '2', '3+']}
                    onSelect={(val) => setFormData({ ...formData, quartos: Number(val) })}
                  />
                </div>
                <div className="w-1/2">
                  <FormSelect
                    label="Banheiros"
                    placeholder="Selecione..."
                    options={['1', '2', '3+']}
                    onSelect={(val) => setFormData({ ...formData, banheiros: Number(val) })}
                  />
                </div>
              </div>
              <div className="mt-4">
                <FormSelect
                  label="Vagas de Garagem"
                  placeholder="Selecione..."
                  options={['1', '2', '3+']}
                  onSelect={(val) => setFormData({ ...formData, vagas: Number(val) })}
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
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: Number(e.target.value) })}
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
                  if (e.target.files) {
                    setFormData({ ...formData, fotos: Array.from(e.target.files) });
                  }
                }}
              />

              <p className="text-gray-600 font-medium">
                {formData.fotos.length > 0 ? `${formData.fotos.length} arquivos selecionados` : 'Clique ou arraste as fotos aqui'}
              </p>
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
            <button
              className="flex items-center justify-center gap-2 w-1/2 bg-[#D87C50] text-white py-3 rounded-xl font-bold hover:bg[#b5653f] transition-colors"
              onClick={() => handleCadastrarImovel}
            >
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