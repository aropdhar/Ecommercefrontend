import React from 'react'
import Productleft from './productleft/Productleft'
import ProductRight from './productright/ProductRight'
import Breadcrum from '../../Component/commoncomponent/breadcrum/Breadcrum.jsx'
import { useGetAllProductCategoryListQuery } from '../../Features/Api/productApi.js'
import {useSelector } from 'react-redux'

const Productpage = () => {
    const { data, error, isLoading } = useGetAllProductCategoryListQuery();
    const categoryredux = useSelector((state) => state.categoryStore.value)
  
  return (
    <div className='container pb-20'>
      <Breadcrum/>
      <div className='flex justify-between gap-x-[12px]'>
        <Productleft categoryList = {categoryredux}/>
        <ProductRight/>
      </div>
    </div>
  )
}

export default Productpage
