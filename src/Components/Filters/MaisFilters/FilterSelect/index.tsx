import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface FilterSelectProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export const FilterSelect = ({ label, options, value, onChange }: FilterSelectProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-gray-600 font-semibold text-sm ml-1">{label}</label>

      <div
        onClick={() => setShowModal(true)}
        className="flex items-center justify-between p-3 border border-gray-200 rounded-xl bg-white shadow-sm"
      >
        <span className="text-gray-800">{value}</span>
        <FaChevronDown className="text-gray-400 text-xs"/>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>

          <div className="relative w-full max-w-xs bg-[#2D2E32] rounded-3xl overflow-hidden shadow-2xl">
            {options.map((opt) => (
              <div
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setShowModal(false);
                }}
                className="flex items-center justify-between p-5 border-b border-gray-700 last:border-none active:bg-gray-700"
              >
                <span className="text-white">{opt}</span>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  value === opt ? 'border-[#98A3FA]' : 'border-gray-500'
                }`}>

                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}