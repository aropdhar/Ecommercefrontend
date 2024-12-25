import React from 'react'
import Header from '../../Component/Rootlayout/Header/Header'
import Navbar from '../../Component/Rootlayout/navbar/Navbar'
import { Link, NavLink } from 'react-router-dom'
import Homepage from './banner/Homepage'
import Flashsale from './flashsale/Flashsale'
import ProductSkeleton from '../../helpers/ProductSkeleton'
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
