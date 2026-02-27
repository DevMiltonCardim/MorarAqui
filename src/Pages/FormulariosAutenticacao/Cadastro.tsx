import { useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/Logo-empresa.png'
import { useState, type Dispatch, type SetStateAction } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaLock } from 'react-icons/fa6';
import { CgArrowLongLeft } from "react-icons/cg";
import { FaKey } from 'react-icons/fa';
import { CgArrowLongRight } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { api } from '../../services/api';



interface LoggedProps {
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const Cadastro = ({ setIsLoggedIn }: LoggedProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/usuarios/cadastrar', {
        nome,
        email,
        whatsapp,
        senha
      });

      alert('Cadastro realizado com sucesso! Agora faça seu login.');
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar. Verifique os dados ou tente novamente.');
    }
  };

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
          <h1 className='text-2xl font-medium'>Quem é você?</h1>
        </div>
        <form onSubmit={handleCadastro} className='flex flex-col mt-8 w-full px-8'>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-1'>
              <label className='pl-1 text-sm'>Nome Completo:</label>
              <div className={`${divInputStyle}`}>
                <MdDriveFileRenameOutline />
                <input
                  className={`${inputStyle}`}
                  type="text"
                  placeholder='Seu nome completo'
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <label className='pl-1 text-sm'>Email:</label>
              <div className={`${divInputStyle}`}>
                <MdOutlineEmail size={18} />
                <input
                  className={`${inputStyle}`}
                  type="email"
                  placeholder='Seu email aqui...'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <label className='pl-1 text-sm'>Telefone:</label>
              <div className={`${divInputStyle}`}>
                <FaPhoneAlt />
                <input
                  className={`${inputStyle}`}
                  type="tel"
                  placeholder='Seu telefone aqui...'
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                />
              </div>
            </div>

            <div className='flex flex-col gap-1'>
              <label className='pl-1 text-sm'>Senha:</label>
              <div className={`${divInputStyle}`}>
                <FaLock />
                <input
                  className={`${inputStyle}`}
                  type="password"
                  placeholder='Sua senha aqui...'
                  required
                  minLength={6}
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button type='submit' className='flex items-center justify-center mt-5 bg-[#D97C50] py-3 rounded-xl text-white text-xl gap-2'>
            <a>Criar conta</a>
          </button>

          <div className='flex justify-center mt-4 gap-1 text-sm'>
            <p>Já tem uma conta?</p>
            <a href="/login" className='text-[#D97C50]'>Entrar</a>
          </div>
        </form>
      </div>

    </>
  )
}

export default Cadastro;