import React from 'react'
import Home from './pages/Home'
import Header from './global/Header'
import Footer from './global/Footer'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import SoftwareDevelopment from './pages/SoftwareDevelopment'
import WebDevelopment from './pages/WebDevelopment'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='about-us' element={<AboutUs/>} />
        <Route path='services' element={<Services/>} />
        <Route path='software-development' element={<SoftwareDevelopment/>} />
        <Route path='web-development' element={<WebDevelopment/>} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
