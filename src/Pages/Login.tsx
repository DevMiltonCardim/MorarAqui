import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../src/assets/Logo-empresa.png'
import type { Dispatch, SetStateAction } from 'react';
import { MdOutlineEmail } from 'react-icons/md';

import { CgArrowLongLeft } from "react-icons/cg";
import { FaKey } from 'react-icons/fa';

interface LoggedProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setIsLoggedIn }: LoggedProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);

    const destino = location.state?.from || "/perfil"
    navigate(destino)
  }

  const divInputStyle = 'flex items-center border rounded-lg px-3 bg-white focus-within:ring-2 focus-within:ring-[#D87C50] focus-within:border-[#D87C50] transition-all'
  const inputStyle = 'w-full p-2.5 outline-none bg-transparent text-gray-800 placeholder:text-gray-400'

  return (
    <>
      <div className='flex flex-col justify-center'>
        <div className='flex flex-col justify-center items-center gap-2 mt-10 pr-3'>
          <img src={Logo} alt="" className="w-10 h-10 md:w-12 md:h-12" />
          <h1 className='font-[Righteous] text-xl md:text-2xl'>
            <span className='text-[#456077]'>Morar</span>
            <span className='text-[#D87C50]'>Aqui</span>
          </h1>
        </div>
        <div className='flex justify-center mt-6'>
          <h1 className='text-2xl font-medium'>Acesse sua conta</h1>
        </div>
        <form onSubmit={onSubmit} className='flex flex-col mt-8 w-full px-8'>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-1'>
              <label className='pl-1 text-sm'>Email:</label>
              <div className={`${divInputStyle}`}>
                <MdOutlineEmail size={18} />
                <input
                  className={`${inputStyle}`}
                  type="email"
                  placeholder='Seu email aqui...'
                  required
                />
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <label className='pl-1 text-sm'>Senha:</label>
              <div className={`${divInputStyle}`}>
                <FaKey />
                <input
                  className={`${inputStyle}`}
                  type="senha"
                  placeholder='Sua senha aqui...'
                  maxLength={8}
                  required
                />
              </div>
            </div>
          </div>
          <div className='flex justify-between pt-1'>

            <a
              href="#"
              className='mt-1 text-sm text-[#D97C50] underline'
            >
              Esqueci minha senha
            </a>
          </div>
          <button type='submit' className='flex items-center justify-center mt-5 bg-[#D97C50] py-3 rounded-xl text-white text-xl'>
            Entrar
          </button>

          <div className='flex justify-center mt-4 gap-1 text-sm'>
            <p>Não tem uma conta?</p>
            <a href="/cadastro" className='text-[#D97C50]'>Criar conta</a>
          </div>
          <div className='flex items-center justify-center mt-4 gap-2 text-sm'>
            <CgArrowLongLeft color='#D97C50'/>
            <a href="/" className='text-[#D97C50]'>Ver imóveis sem entrar</a>
          </div>
        </form>
      </div>

    </>
  )
}

export default Login;