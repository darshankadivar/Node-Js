import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import ViewProfile from './pages/ViewProfile'
import AddRecipe from './pages/AddRecipe'
import MyRecipe from './pages/MyRecipe'
import EditRecipe from './pages/EditRecipe'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/viewprofile' element={<ViewProfile/>}></Route>
        <Route path='/addrecipe' element={<AddRecipe/>}></Route>
        <Route path='/myrecipe' element={<MyRecipe/>}></Route>
        <Route path='/editrecipe/:id' element={<EditRecipe/>}></Route>
      </Routes>
    </div>
  )
}
