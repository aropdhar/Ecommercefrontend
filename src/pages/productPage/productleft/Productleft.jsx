import React from 'react'
import Oval from '../../../assets/Oval.png'
import Oval1 from '../../../assets/Oval1.png'
import Oval2 from '../../../assets/Oval2.png'

const Productleft = ({categoryList , isLoading , handlecategory = ()=>{}}) => {


  return (
     <div className='w-[23%] border-r-[2px] border-r-text_7D8184 '>
        <h1 className='text-[20px] font-bold leading-[30px] font-poppins mb-[15px]'>Shop by Category</h1>
        {isLoading ?
        (<ul>
            {/* Simulate 5 loading skeleton items */}
            {Array(7)
            .fill("")
            .map((_, index) => (
                <div
                key={index}
                className="flex items-center justify-between hover:bg-gray-200 transition-all"
                >
                <li className="flex animate-pulse bg-gray-300 rounded w-full py-4 my-3 mr-6"></li>
                </div>
            ))}
        </ul>)
        :
        (<ul className=''>
            {categoryList.map((item , index)=>(
            <>
                <div key={index} className='pr-[16px] hover:bg-gray-500 hover:text-white  cursor-pointer transition-all' onClick={()=> handlecategory(item._id)}>
                <li className='py-[10px] text-[16px] font-poppins font-normal transition-all hover:pl-[10px] leading-[24px] '>{item.title}</li>
                
                </div>
            </>
            ))
            }
        </ul>)
        }

        <div>
            <h1 className='text-[20px] font-bold leading-[30px] font-poppins mb-[15px]'>Shop by Color</h1>
            <div className='flex flex-col gap-y-[8px]'>
                <div className='flex items-center gap-x-[10px]'>
                    <img src={Oval} alt={Oval} />
                    <span className='inline-block text-[16px] font-normal font-poppins leading-[30px]'>color</span>
                </div>
                <div className='flex items-center gap-x-[10px]'>
                    <img src={Oval1} alt={Oval1} />
                    <span className='inline-block text-[16px] font-normal font-poppins leading-[30px]'>color</span>
                </div>
                <div className='flex items-center gap-x-[10px]'>
                    <img src={Oval2} alt={Oval2} />
                    <span className='inline-block text-[16px] font-normal font-poppins leading-[30px]'>color</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Productleft
