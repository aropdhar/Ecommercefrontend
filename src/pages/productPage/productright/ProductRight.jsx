import React, { useState } from 'react'
import Productcommonlayouts from '../../../Component/commoncomponent/product/Productcommonlayouts'
import Productcard from '../../../Component/commoncomponent/product/Productcard'
// import { useGetAllProductQuery } from '../../../Features/Api/productApi';
import { useGetAllProductQuery } from '../../../Features/Api/exclusiveApi';
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Link } from 'react-router-dom';
import ProductList from '../productlist/ProductList';


const ProductRight = () => {
  // const { data, error, isLoading } = useGetAllProductQuery();
  const { data, error, isLoading } = useGetAllProductQuery();
  
  
  // grid product section

  const [page , setPage] = useState(1);
  const [pagepershow , SetpagePershow] = useState(9);
  let productlength = data?.data?.length / 9;

  // list product Section
  
  const [pageshow , setpageshow] = useState(1);
  const [listpageshow , setListpageshow] = useState(3);
  let Listproductlength = data?.data?.length / 3;
  const [activeshow , setActiveshow] = useState("grid");
  const [gridshow , setGridshow] = useState("Grid");
  

  const handleItem = (index) =>{
    if(index > 0 && index <= Math.ceil(productlength || pagepershow)){
      setPage(index)
    }
  }
  
  const handlepageItem = (index) =>{
    if(index > 0 && index <= Math.ceil(Listproductlength || pagepershow)){
      setpageshow(index)
    }
  }
  

  const handlepershow = (e) =>{
    SetpagePershow(e.target.value);
  }

  const handleGrid = () =>{
    setActiveshow("grid");
    setGridshow("Grid")
  }

  const handleList = () =>{
    setActiveshow("list");
    setGridshow("List");
  }

  return (
    <div className='w-[75%]'>
       <div className='flex items-center justify-between'>
          <div className='flex items-center gap-x-[10px]'>
            <h1 className='text-[16px] font-poppins font-normal leading-[24px]'>View:</h1>
            <div className='flex items-center gap-x-[10px] text-[22px]'>
              <Link onClick={handleGrid}><LuLayoutGrid className={activeshow == "grid" ? "text-black" : "text-gray-400"}/></Link>
              <Link onClick={handleList}><LuList className={activeshow == "list" ? "text-black" : "text-gray-400"}/></Link>
            </div>
          </div>
          <div className=' flex items-center gap-x-[10px]'>
            <h1 className='text-[16px] font-normal font-poppins leading-[24px]'>Show:</h1>
            <select name="" id="" className='px-[12px] bg-transparent border-2 border-black-500 cursor-pointer rounded-[5px]' onChange={handlepershow}>
              <option value="9">9</option>
              <option value="18">18</option>
              <option value="36">36</option>
            </select>
          </div>
       </div>

      {/* Product Grid  */}
      {gridshow == "Grid" && (
        <div className='flex flex-wrap justify-between'>
          {data?.data?.slice(page * 9 - 9, page * pagepershow).map((item , index)=>(
            <div className='w-[30%]'>
              <Productcard itemData={item}/>
            </div>
          ))
          }
       </div>
       )}

       {/* product List */}
        {gridshow == "List" && (
          <div>
            {data?.data?.slice(pageshow * 3 - 3, pageshow * listpageshow).map((item , index)=>(
              <ProductList itemData={item} />
            ))}
          </div>
        )}

       {/* pagination section */}

      {gridshow == "List" ?
       
        <nav aria-label="Page navigation example" className='flex items-center justify-center mt-20'>
          <ul class="inline-flex -space-x-px text-base h-10">
            <li>
              <span href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer" onClick={()=>handlepageItem(pageshow - 1)}>Previous</span>
            </li>
            {[...new Array(Math.ceil(Listproductlength) || 2)].map((_ , index)=>(
              <li>
                <span href="#" className={index + 1 === pageshow ?
                  "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-black dark:hover:bg-red cursor-pointer dark:hover:text-white"
                  :
                  "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 cursor-pointer dark:hover:text-white"
                } onClick={()=>handlepageItem(index + 1)}>{index + 1}</span>
              </li>
            ))

            }
            
            <li>
              <span href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer" onClick={()=>handlepageItem(pageshow + 1)}>Next</span>
            </li>
          </ul>
        </nav>

       :
         <nav aria-label="Page navigation example" className='flex items-center justify-center mt-20'>
          <ul class="inline-flex -space-x-px text-base h-10">
            <li>
              <span href="#" class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer" onClick={()=>handleItem(page - 1)}>Previous</span>
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
              <span href="#" class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-black dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer" onClick={()=>handleItem(page + 1)}>Next</span>
            </li>
          </ul>
        </nav>
      }


    </div>
  )
}

export default ProductRight
