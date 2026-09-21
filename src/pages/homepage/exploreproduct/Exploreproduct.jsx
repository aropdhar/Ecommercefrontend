import React, { useState } from 'react'
import Productcommonlayouts from '../../../Component/commoncomponent/product/Productcommonlayouts'
import Productcard from '../../../Component/commoncomponent/product/Productcard'
import { useGetAllProductQuery } from '../../../Features/Api/exclusiveApi';

const Exploreproduct = () => {

      const { data, error, isLoading } = useGetAllProductQuery();
      const [stage , setStage] = useState(0)
      const totalproduct = Math.ceil((data?.data?.length || 0) / 4);
      const initialstage = 2;
      const midrows = Math.ceil((totalproduct + initialstage) / 2);
     
      const rowstoshow = stage === 0 ? initialstage : stage === 1 ? midrows : totalproduct
      
      const isFullyShown = rowstoshow >= totalproduct
      
  return (
    <div className='container'>
        <div className='flex flex-col items-center border-b-[1px] border-b-black_363738 mb-10'>
            <Productcommonlayouts 
                isArrowsTrue={true}
                heading={"Our Products"}
                description={"Explore Our Products"}
                partialItem = {4}
                Productcard={Productcard}
                componentData = {data?.data}
                rows = {rowstoshow}
            />
            {totalproduct > initialstage && (
                <div className="pb-20 mt-[80px]">
                    <button onClick={()=>setStage(isFullyShown ? 0 : stage + 1 )} className="px-[48px] py-4 bg-button_DB4444 rounded text-md font-popins font-medium text-white_color hover:opacity-75 cursor-pointer ">
                        {isFullyShown ? "Show Less Products" : "View All Products"}
                    </button>
                </div>
            )}
        </div>
    </div>
  )
}

export default Exploreproduct
