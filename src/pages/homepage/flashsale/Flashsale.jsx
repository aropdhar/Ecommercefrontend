import React from 'react'
import Productcard from '../../../Component/commoncomponent/product/Productcard'
import Productcommonlayouts from '../../../Component/commoncomponent/product/Productcommonlayouts';
import { useGetAllFlashSaleQuery } from '../../../Features/Api/exclusiveApi';
import { useGetAllProductQuery } from '../../../Features/Api/productApi';

const Flashsale = () => { 
  
  //  const { data, error, isLoading } = useGetAllProductQuery(); 
  const { data, error, isLoading } = useGetAllFlashSaleQuery();
  // const timedate = parseInt(data?.data[0]?.offerDate?.offerDate);
  
  

  const flashSaleProducts = data?.data.map((item)=>{
    return item.productId    
  });

  
  
  const timeDate = 3;
  
  return (
    <>
      
      <div className="container">
        <div className="flex flex-col items-center border-b-[1px] border-b-black_363738 mb-10">
          <Productcommonlayouts
            Productcard={Productcard}
            timeStamp={true}
            timeofOffer={timeDate || 1}
            isArrowsTrue={true}
            heading="Today's"
            description="Flash Sales"
            componentData ={flashSaleProducts}
            isLoading = {isLoading}
          />
          <div className="pb-20 mt-[80px]">
            <button className="px-[48px] py-4 bg-button_DB4444 rounded text-md font-popins font-medium text-white_color hover:opacity-75 cursor-pointer ">
              View All Products
            </button>
          </div>
        </div>
    </div>
    </>
  )
}

export default Flashsale
