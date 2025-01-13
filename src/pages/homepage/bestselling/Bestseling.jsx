import React from 'react'
import Productcommonlayouts from '../../../Component/commoncomponent/product/Productcommonlayouts'
import Productcard from '../../../Component/commoncomponent/product/Productcard'
import { useGetBestSellingProductsQuery } from '../../../Features/Api/productApi';

const Bestseling = () => {

 
  const { data, error, isLoading } = useGetBestSellingProductsQuery();

  

  return (
    <>
      <div className='container border-t-2 border-gray-300 data'>
      <Productcommonlayouts
            Productcard={Productcard}
            isArrowsTrue={false}
            heading="This Month"
            description="Best Selling Products"
            componentData={data?.products}
            isButton={true}
        />
      </div>
          
    </>
  )
}

export default Bestseling
