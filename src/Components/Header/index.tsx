import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo-empresa.png'

const Header = () => {

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

        <div className='flex items-center gap-4 pr-2'>
            <div className='flex flex-col'>
              <Link to="/login" className='text-xl hover:text-[#D87C50]'>Anunciar</Link>
            </div>
        </div>


      </nav>
    </header>
  )
}

export default Header