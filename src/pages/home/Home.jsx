import React from 'react'
import Header from '../../Component/Rootlayout/Header/Header'
import Navbar from '../../Component/Rootlayout/navbar/Navbar'
import { Link, NavLink } from 'react-router-dom'
import Homepage from '../homepage/banner/Homepage'
import Flashsale from '../homepage/flashsale/Flashsale'

const Home = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <Homepage/>
      <Flashsale/>
    </>
  )
}

export default Home
