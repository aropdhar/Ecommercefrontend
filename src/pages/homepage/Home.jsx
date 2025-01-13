import React from 'react'
import Header from '../../Component/Rootlayout/Header/Header'
import Navbar from '../../Component/Rootlayout/navbar/Navbar'
import Homepage from './banner/Homepage'
import Flashsale from './flashsale/Flashsale'
import Category from './category/Category'
import Bestseling from './bestselling/Bestseling'
import Experience from './experience/Experience'


const Home = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <Homepage/>
      <Flashsale/>
      <Category/>
      <Bestseling/>
      <Experience/>
    </>
  )
}

export default Home
