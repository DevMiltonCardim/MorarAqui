import Logo from '../../src/assets/Logo-empresa.png'
import { FcGoogle } from "react-icons/fc";


const Login = () => {

  return (
    <>
    <div className='flex flex-col items-center justify-center'>
        <div className='flex items-center gap-2'>
            <img src={Logo} alt="" className="w-10 h-10 md:w-12 md:h-12" />
            <h1 className='font-[Righteous] text-xl md:text-2xl'>
                <span className='text-[#456077]'>Morar</span>
                <span className='text-[#D87C50]'>Aqui</span>
            </h1>
        </div>

        
    </div>

    </>
  )
}

export default Login;