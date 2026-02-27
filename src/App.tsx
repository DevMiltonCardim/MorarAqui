import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Layout from './Layout'
import Home from './Pages/Home'
import PaginaProduto from './Pages/PaginaProduto'
import Login from './Pages/FormulariosAutenticacao/Login'
import Cadastro from './Pages/FormulariosAutenticacao/Cadastro'
import Anunciar from './Pages/Anunciar'
import PainelAnunciante from './Pages/PainelAnunciante'

function AppRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('@MorarAqui:token'));

  return (
    <Routes>
      <Route path='/' element={<Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>
        <Route index element={<Home />} />
        <Route path='detalhes/:id' element={<PaginaProduto />} />
        <Route
          path='anunciar'
          element={isLoggedIn ? <Anunciar /> : <Navigate to={"/cadastro"} replace />}
        />
        <Route
          path='painel'
          element={isLoggedIn ? <PainelAnunciante /> : <Navigate to="/login" />}
        />

      </Route>
      <Route
        path='/login'
        element={isLoggedIn ? <Navigate to="/" replace /> : <Login setIsLoggedIn={setIsLoggedIn} />}
      />
      
      <Route
        path='/cadastro'
        element={isLoggedIn ? <Navigate to="/" replace /> : <Cadastro setIsLoggedIn={setIsLoggedIn} />}
      />

      // Tela 404
      <Route
        path='*'
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