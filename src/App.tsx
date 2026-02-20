import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import PaginaProduto from './Pages/PaginaProduto'
import Login from './Pages/Login'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Anunciar from './Pages/Anunciar'

function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/anunciar");
  }

  return (
    <Routes>
      <Route path='/' element={<Layout isLoggedIn={isLoggedIn} />}>
        <Route index element={<Home />} />
        <Route path='detalhes/:id' element={<PaginaProduto />} />
        <Route
          path='anunciar'
          element={isLoggedIn ? <Anunciar /> : <Navigate to={"/login"} replace />}
        />
      </Route>
      <Route
        path='/login'
        element={isLoggedIn ? <Navigate to="/" replace /> : <Login setIsLoggedIn={setIsLoggedIn} />}
      />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
