import React from 'react'
import Productleft from './productleft/Productleft'
import ProductRight from './productright/ProductRight'
import Breadcrum from '../../Component/commoncomponent/breadcrum/Breadcrum.jsx'
import { useGetAllProductCategoryListQuery } from '../../Features/Api/productApi.js'

const Productpage = () => {
    const { data, error, isLoading } = useGetAllProductCategoryListQuery();

    
  return (
    <div className='container pb-20'>
      <Breadcrum/>
      <div className='flex justify-between gap-x-[12px]'>
        <Productleft categoryList = {data} isLoading = {isLoading}/>
        <ProductRight/>
      </div>
    </div>
  )
}

export default Productpage
