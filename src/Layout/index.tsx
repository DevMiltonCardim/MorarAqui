import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

interface LayoutProps {
  isLoggedIn: boolean;
  children?: React.ReactNode;
}

const Layout = ({ isLoggedIn }: LayoutProps) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default Layout