import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../Components/Pages/Login'
import { Register } from '../Components/Pages/Register'

export const AuthRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
      <Route path="*" element={<Navigate replace to="/auth/login" />} />
    </Routes>
  )
}
