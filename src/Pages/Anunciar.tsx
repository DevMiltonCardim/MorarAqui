import { useState } from "react";
import { FormSelect } from "../Components/FormSelect";

const Anunciar = () => {
  const [dadosAnuncio, setDadosAnuncio] = useState({
    titulo: '',
    tipo: '',
    preco: '',
    nomeCidade: '',
    nomeBairro: '',
    quartos: 0,
    descricao: '',
    fotos: []
  });

  const handleAnunciarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Dados prontos para enviar:", dadosAnuncio);
  }

  return (
    <section>
      <div>
        <label>Título:</label>
        <input type="text" placeholder="Adicione o titulo do imóvel..." required />
      </div>
      <div>
        <label>Descrição:</label>
        <input type="text" placeholder="Adicione a descrição do seu imóvel" required />
      </div>
      <div>
        <div>
          <FormSelect 
            label="Tipo de Imóvel"
            placeholder="Selecione..."
            options={['Casa', 'Apartamento', 'Kitnet', 'Sobrado']}
            onSelect={(val) => setDadosAnuncio({...dadosAnuncio, tipo: val})}
          />
        </div>
        <div>
          <FormSelect 
            label="Finalidade"
            placeholder="Selecione..."
            options={['Venda', 'Aluguel']}
            onSelect={(val) => setDadosAnuncio({...dadosAnuncio,})}
          />
        </div>
      </div>
    </section>
  )
}

export default Anunciar;