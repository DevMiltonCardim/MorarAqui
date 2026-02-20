interface PriceInputProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
}

export const PriceInput = ({ label, value, onChange }: PriceInputProps) => {
  const formatarParaMostrar = (num: number) => {
    if (!num) return "";
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
    }).format(num);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const apenasNumeros = e.target.value.replace(/\D/g, "");

    const valorNumerico = Number(apenasNumeros) / 100;

    onChange(valorNumerico);
  }
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-gray-700 font-medium text-sm">{label}</label>
      <div className="flex items-center w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white focus-within:border-[#D87C50] focus-within:ring-1 focus-within:ring-[#D87C50] transition-all shadow-sm">
        <span className="text-gray-900 font-bold mr-2 border-r pr-2 border-gray-200">
          R$
        </span>
        <input 
          type="text" 
          placeholder="0,00"
          value={formatarParaMostrar(value)}
          className="w-full outline-none text-gray-900 placeholder:text-gray-400 bg-transparent font-medium"
          onChange={handleChange}
        />
      </div>
    </div>
  )
}