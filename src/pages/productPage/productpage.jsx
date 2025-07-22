import React, { useState } from 'react'
import Productleft from './productleft/Productleft'
import ProductRight from './productright/ProductRight'
import Breadcrum from '../../Component/commoncomponent/breadcrum/Breadcrum.jsx'


import {useSelector } from 'react-redux'

const Productpage = () => {
    const categoryredux = useSelector((state) => state.categoryStore.value);
    const [Category , setCategory] = useState('');
    
    const handlecategory = (id)=>{
      setCategory(id);
    }

    

  return (
    <div className='container pb-20'>
      <Breadcrum/>
      <div className='flex justify-between gap-x-[12px]'>
        <Productleft categoryList={categoryredux} handlecategory={handlecategory}/>
        <ProductRight categoryId={Category}/>
      </div>
    </div>
  )
}

export default Productpage
