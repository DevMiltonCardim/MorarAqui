import { Outlet } from "react-router-dom"
import { type Dispatch, type SetStateAction } from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

interface LayoutProps {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
}

const Layout = ({ isLoggedIn, setIsLoggedIn }: LayoutProps) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout