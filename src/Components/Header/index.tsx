import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo-empresa.png'
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='w-full bg-gray-50'>
      <nav className='w-full relative flex items-center justify-between px-2 py-3 shadow-sm'>
        <div className='flex items-center gap-2'>
          <img src={Logo} alt="" className="w-10 h-10 md:w-12 md:h-12" />
          <h1 className='font-[Righteous] text-xl md:text-2xl'>
            <span className='text-[#456077]'>Morar</span>
            <span className='text-[#D87C50]'>Aqui</span>
          </h1>
        </div>

        <div className='hidden md:flex items-center gap-7'>
          <Link to="/" className='text-base hover:duration-200 hover:text-[#D87C50]'>Imóveis</Link>
          <Link to="/Sobre" className='text-base hover:duration-200 hover:text-[#D87C50]'>Sobre</Link>
          <Link to="/Contato" className='text-base hover:duration-200 hover:text-[#D87C50]'>Contato</Link>
        </div>

        <div className='sm:hidden'>
          <button aria-label='Abrir menu' onClick={() => setMenuOpen(!menuOpen)} className='p-2 rounded-md'>
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className='absolute left-0 right-0 top-full bg-white shadow-md sm:hidden z-20'>
            <div className='flex flex-col px-4 py-4 gap-3'>
              <Link to="/" onClick={() => setMenuOpen(false)} className='text-xl hover:text-[#D87C50]'>Imóveis</Link>
              <Link to="/Sobre" onClick={() => setMenuOpen(false)} className='text-xl hover:text-[#D87C50]'>Sobre</Link>
              <Link to="/Contato" onClick={() => setMenuOpen(false)} className='text-xl hover:text-[#D87C50]'>Contato</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header