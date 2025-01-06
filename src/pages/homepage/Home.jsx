import React from 'react'
import Header from '../../Component/Rootlayout/Header/Header'
import Navbar from '../../Component/Rootlayout/navbar/Navbar'
import Homepage from './banner/Homepage'
import Flashsale from './flashsale/Flashsale'
import Category from './category/Category'

const Home = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <Homepage/>
      <Flashsale/>
      <Category/>
    </>
  )
}

export default Home
