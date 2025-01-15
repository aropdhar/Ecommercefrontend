import React from 'react'
import Header from '../../Component/Rootlayout/Header/Header'
import Navbar from '../../Component/Rootlayout/navbar/Navbar'
import Homepage from './banner/Homepage'
import Flashsale from './flashsale/Flashsale'
import Category from './category/Category'
import Bestseling from './bestselling/Bestseling'
import Experience from './experience/Experience'
import Exploreproduct from './exploreproduct/Exploreproduct'
import Newarrival from './newarrival/Newarrival'


const Home = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <Homepage/>
      <Flashsale/>
      <Category/>
      <Bestseling/>
      <Experience timeoffer = {5}/>
      <Exploreproduct/>
      <Newarrival/>
    </>
  )
}

export default Home
