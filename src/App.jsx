import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About/Index'
import Home from './Pages/Home/Index'

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}
