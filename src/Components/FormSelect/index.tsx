import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface FormSelectProps {
  label: string;
  placeholder: string;
  options: string[];
  onSelect: (value: string) => void;
}

export const FormSelect = ({ label, placeholder, options, onSelect }: FormSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("")
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlwSelect = (option: string) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-2 w-full relative" ref={dropdownRef}>
      <label className="text-gray-700 font-medium text-sm">{label}</label>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full border border-gray-300 rounded-lg px-4 py-2.5 bg-white text-gray-700 hover:border-[#D87C50] transition-all"
      >
        <span className={selected ? "text-gray-900" : "text-gray-400"}>
          {selected || placeholder}
        </span>
        <FaChevronDown 
          size={20}
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180': ''}`}
        />
      </button>

      {isOpen && (
        <ul className="absolute z-50 w-full top-[75px] bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handlwSelect(option)}
              className="px-4 py-2.5 hover-bg-orange-50 cursor-pointer text-gray-700 transition-colors"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};