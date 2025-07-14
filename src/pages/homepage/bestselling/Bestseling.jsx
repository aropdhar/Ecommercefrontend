import React, { useState } from 'react'
import Productcommonlayouts from '../../../Component/commoncomponent/product/Productcommonlayouts'
import Productcard from '../../../Component/commoncomponent/product/Productcard'
import { useGetAllBestSellingQuery } from '../../../Features/Api/exclusiveApi'
// import { useGetBestSellingProductsQuery } from '../../../Features/Api/productApi';

const Bestseling = () => {

  // const { data, error, isLoading } = useGetBestSellingProductsQuery();
 
  const { data, error, isLoading } = useGetAllBestSellingQuery();
 

  const bestsellingproduct = data?.data?.map((item)=>{
    return item.product
  })

  return (
    <>
      <div className='container border-t-2 border-gray-300 data'>
        <Productcommonlayouts
              Productcard={Productcard}
              isArrowsTrue={false}
              heading="This Month"
              description="Best Selling Products"
              componentData={bestsellingproduct}
              isButton={true}
        />
      </div>
          
    </>
  )
}

export default Bestseling
