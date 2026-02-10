import { IoSearch } from 'react-icons/io5';
import ImagemBanner from '../../assets/hand-holding-key-outdoors.jpg';

export const HeroSection = () => {
  return (
    <div className="relative h-[320px] w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${ImagemBanner})` }}>

      <div className="absolute inset-0 bg-black/70"></div>

      <div className='z-10 text-center flex flex-col gap-4 w-10/12'>
        <h3 className='text-white text-2xl text-center font-[Playfair-Display] font-semibold'>
          Imóveis Selecionados Para Você Viver Bem
        </h3>
        <p className='text-[#B8860B]'>
          Encontre os melhores imóveis perto de você.
        </p>
        <button className='flex items-center justify-center gap-2 bg-[#B8860B] text-white px-6 py-3 rounded-md hover:bg-[#9A6B00] transition-colors'>
          <IoSearch size={26}/>
          Explorar Imóveis
        </button>
      </div>
    </div>
  )
}