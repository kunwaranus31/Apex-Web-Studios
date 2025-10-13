import React from 'react'
import Home from './pages/Home'
import Header from './global/Header'
import Footer from './global/Footer'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import SoftwareDevelopment from './pages/SoftwareDevelopment'
import WebDevelopment from './pages/WebDevelopment'
import BigDataDevelopment from './pages/BigDataDevelopment'
import AiDevelopment from './pages/AiDevelopment'
import MobileAppDevelopment from './pages/MobileAppDevelopment'
import DevopsCloud from './pages/DevopsCloud'
import ContactUs from './pages/ContactUs'
import Career from './pages/Career'
import Industries from './pages/Industries'

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
        <Route path="big-data-development" element={<BigDataDevelopment/> } />
        <Route path="ai-development" element={<AiDevelopment/> } />
        <Route path="devops" element={ <DevopsCloud/> } />
        <Route path="mobile-app-development" element={ <MobileAppDevelopment/> } />
        <Route path="contact-us" element={ <ContactUs/> } />
        <Route path="career" element={ <Career/> } />
        <Route path="industries" element={ <Industries/> } />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
