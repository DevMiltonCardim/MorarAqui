import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './Pages/Home'
import PaginaProduto from './Pages/PaginaProduto'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='detalhes/:id' element={<PaginaProduto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
