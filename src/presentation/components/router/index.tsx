import { Login } from '@/presentation/pages'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Login />} path='/login' />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
