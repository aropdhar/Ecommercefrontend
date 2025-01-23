import React, { useState } from 'react'
import Productcommonlayouts from '../../../Component/commoncomponent/product/Productcommonlayouts'
import Productcard from '../../../Component/commoncomponent/product/Productcard'
import { useGetAllProductQuery } from '../../../Features/Api/productApi';


const ProductRight = () => {
  const { data, error, isLoading } = useGetAllProductQuery();
  const [page , setPage] = useState(1);
  const [pagepershow , SetpagePershow] = useState(9);
  let productlength = data?.products?.length / 9;

  const handleItem = (index) =>{
     setPage(index)
  }

  return (
    <div className='w-[75%]'>
       <div className='flex gap-x-[10px] items-center justify-end'>
          <h1 className='text-[16px] font-normal font-poppins leading-[24px]'>Show:</h1>
          <select name="" id="" className='px-[12px] bg-transparent border-2 border-black-500 cursor-pointer rounded-[5px]'>
            <option value="9">9</option>
            <option value="18">18</option>
            <option value="36">36</option>
          </select>
       </div>
       <div className='flex flex-wrap justify-between'>
          {data?.products.slice(page * 9 - 9, page * pagepershow).map((item , index)=>(
            <div className='w-[30%]'>
              <Productcard itemData={item}/>
            </div>
          ))

          }
       </div>

       {/* pagination section */}

       <nav aria-label="Page navigation example" className='flex items-center justify-center mt-20'>
          <ul class="inline-flex -space-x-px text-base h-10">
            <li>
              <span href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">Previous</span>
            </li>
            {[...new Array(Math.ceil(productlength) || 8)].map((_ , index)=>(
              <li>
                <span href="#" className={index + 1 === page ?
                  "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-black dark:hover:bg-red cursor-pointer dark:hover:text-white"
                  :
                  "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 cursor-pointer dark:hover:text-white"
                } onClick={()=>handleItem(index + 1)}>{index + 1}</span>
              </li>
            ))

            }
           
            <li>
              <span href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer">Next</span>
            </li>
          </ul>
        </nav>

    </div>
  )
}

export default ProductRight
