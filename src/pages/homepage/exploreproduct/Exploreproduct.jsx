import React from 'react'
import Productcommonlayouts from '../../../Component/commoncomponent/product/Productcommonlayouts'
import Productcard from '../../../Component/commoncomponent/product/Productcard'
import { useGetAllProductQuery } from '../../../Features/Api/productApi';

const Exploreproduct = () => {
   const { data, error, isLoading } = useGetAllProductQuery();
  return (
    <div className='container'>
        <div className='flex flex-col items-center border-b-[1px] border-b-black_363738 mb-10'>
        <Productcommonlayouts 
            isArrowsTrue={true}
            heading={"Our Products"}
            description={"Explore Our Products"}
            partialItem = {4}
            Productcard={Productcard}
            componentData = {data?.products}
            rows = {2}
        />
            <div className="pb-20 mt-[80px]">
                <button className="px-[48px] py-4 bg-button_DB4444 rounded text-md font-popins font-medium text-white_color hover:opacity-75 cursor-pointer ">
                View All Products
                </button>
            </div>
        </div>
    </div>
  )
}

export default Exploreproduct
