import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

interface bannerImagemProps {
  fotos: string[];
}

export const BannerImagemPropriedade = ({ fotos }: bannerImagemProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const retroceder = () => {
    setCurrentIndex((prev) => (prev === 0 ? fotos.length - 1 : prev - 1))
  }

  const avancar = () => {
    setCurrentIndex((prev) => (prev === fotos.length - 1 ? 0 : prev + 1))
  }

  if (!fotos || fotos.length === 0) return null;

  return (
    <div className='relative overflow-hidden w-full'>
      <img
        src={fotos[currentIndex]}
        alt={`Imóvel foto ${currentIndex + 1}`}
        className="max-w-full max-h-full object-cover transition-all duration-500 ease-in-out"
      />

      <button
        onClick={retroceder}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={avancar}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
      >
        <FaChevronRight />
      </button>
    </div>
  )
}