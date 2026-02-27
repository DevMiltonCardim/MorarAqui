import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo-empresa.png'
import type { Dispatch, SetStateAction } from 'react';
import { BiLogOut } from 'react-icons/bi';

interface isLoggedHeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ isLoggedIn, setIsLoggedIn }: isLoggedHeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('@MorarAqui:token');
    localStorage.removeItem('@MorarAqui:userId');

    setIsLoggedIn(false);
    navigate('/login');
  }

  const handleAnunciarClick = () => {
    if (isLoggedIn) {
      navigate("/anunciar")
    } else {
      navigate("/login", { state: { from: "/anunciar" } });
    }
  }

  return (
    <header className='w-full bg-gray-50'>
      <nav className='w-full relative flex items-center justify-between px-2 py-3 shadow-sm'>
        <Link to="/">
          <div className='flex items-center gap-2'>
            <img src={Logo} alt="" className="w-10 h-10 md:w-12 md:h-12" />
            <h1 className='font-[Righteous] text-xl md:text-2xl'>
              <span className='text-[#456077]'>Morar</span>
              <span className='text-[#D87C50]'>Aqui</span>
            </h1>
          </div>
        </Link>
        <div className='flex items-center gap-4 md:gap-6'>
          {isLoggedIn && (
            <button
              className='flex flex-col justify-center items-center'
              onClick={handleLogout}
            >
              <BiLogOut size={22} className='mr-2' />
              <span className='text-sm text-gray-400'>Logout</span>
            </button>
          )}
          <div className='flex items-center gap-4 pr-2 border-2 border-[#D87C50] rounded-lg px-3 py-1'>
            <div className='flex flex-col'>
              <button onClick={handleAnunciarClick} className='text-[16px] hover:text-[#D87C50]'>Anunciar Imóvel</button>
            </div>
          </div>
        </div>

      </nav>
    </header>
  )
}

export default Header