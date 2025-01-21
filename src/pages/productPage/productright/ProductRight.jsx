import React from 'react'
import Productcommonlayouts from '../../../Component/commoncomponent/product/Productcommonlayouts'
import Productcard from '../../../Component/commoncomponent/product/Productcard'
import { useGetAllProductQuery } from '../../../Features/Api/productApi';


const ProductRight = () => {
  const { data, error, isLoading } = useGetAllProductQuery();
  console.log(data?.products);
  
  return (
    <div className='w-[70%]'>
       <div className='flex gap-x-[10px] items-center justify-end'>
          <h1 className='text-[16px] font-normal font-poppins leading-[24px]'>Show:</h1>
          <select name="" id="" className='px-[12px] bg-transparent border-2 border-black-500 cursor-pointer rounded-[5px]'>
            <option value="9">9</option>
            <option value="18">18</option>
            <option value="36">36</option>
          </select>
       </div>
       <div className='flex flex-wrap gap-x-[30px]'>
          {data?.products.map((item , index)=>(
            <div className='w-[30%]'>
              <Productcard itemData={item}/>
            </div>
          ))

          }
       </div>

    </div>
  )
}

export default ProductRight
