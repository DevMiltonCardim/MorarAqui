import React, { useState } from "react"

interface PriceFilterProps {
  minPrice: string;
  setMinPrice: React.Dispatch<React.SetStateAction<string>>;
  maxPrice: string;
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>;
}

export const PriceFilter = ({ minPrice, setMinPrice, maxPrice, setMaxPrice }: PriceFilterProps) => {
  
  const formatCurrency = (value: string | number) => {
    if (!value) return "";
    const digits = value.toString().replace(/\D/g, "");
  
    const amount = (Number(digits) / 100).toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  
    return amount;
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    if (rawValue.length <= 12) {
      const formatted = formatCurrency(rawValue);

      setter(rawValue === "" || rawValue === "000" ? "" : formatted)
    }
  };

  const handleFocus = (value: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
    if (!value) setter("0,00");
  }

  const handleBlur = (value: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
    if (value === "0,00") setter("");
  }

  return (
    <div className="flex flex-col gap-2 w-full mt-2">
      <label className="font-semibold text-sm text-gray-800 ml-1">Faixa de preço</label>

      <div className="flex items-center gap-3">
        <div className="flex-1">
          <input 
            type="text"
            inputMode="numeric"
            value={minPrice}
            placeholder="Mínimo"
            onChange={(e) => handleChange(e, setMinPrice)}
            onFocus={() => handleFocus(minPrice, setMinPrice)}
            onBlur={() => handleBlur(minPrice, setMinPrice)}
            className="w-full p-3 border border-gray-300 rounded-xl text-xl text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#D87C50] transition-colors"
          />
        </div>

        <span className="text-gray-500 text-2xl">-</span>

        <div className="flex-1">
          <input 
            type="text"
            inputMode="numeric"
            value={maxPrice}
            placeholder="Máximo"
            onChange={(e) => handleChange(e, setMaxPrice)}
            onFocus={() => handleFocus(maxPrice, setMaxPrice)}
            onBlur={() => handleBlur(maxPrice, setMaxPrice)}
            className="w-full p-3 border border-gray-300 rounded-xl text-xl text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#D87C50] transition-colors"
          />
        </div>
      </div>
    </div>
  )
}