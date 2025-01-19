import React from 'react'
import Header from './Header/Header'
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'

const Rootlayouts = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default Rootlayouts
