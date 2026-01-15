import React, { useState } from 'react'
import Star from '../../../Component/commoncomponent/star/Star'
import { CiHeart } from 'react-icons/ci'
import { TbTruckDelivery } from 'react-icons/tb'
import { NavLink, useParams } from 'react-router-dom'
import Returnicons from '../../../assets/return.png'
import UsediscountPrice from '../../../hooks/UsediscountPrice'
import { AxiosInstance } from '../../../Component/commoncomponent/axios/AxiosInstance'
import { SuccessToast } from '../../../utils/toast'


const ProductContent = ({ProductDetailsdata}) => {
  
  const {id} = useParams();
  
  
  
  const size = [
    {id: 1 , size: 'XS'},
    {id: 2 , size: 'S'},
    {id: 3 , size: 'M'},
    {id: 4 , size: 'L'},
    {id: 5 , size: 'XL'},
  ]
  
  const [loading , setloading] = useState(false);
  const [quantity , setQuantity] = useState(1);
  
  const handleDecrement = () =>{
    if(quantity > 1){
      setQuantity(quantity - 1);
    }
  }
  
  
  const handleaddtocart = async () =>{
    setloading(true)
    try {
      
      const response = await AxiosInstance.post('/cart' ,{
         product: id,
         quantity: quantity
      },{
        withCredentials: true
      })
      
      if(response?.statusText.toLowerCase() == "OK".toLowerCase()){
        SuccessToast(response?.data?.message)
      }
    } catch (error) {
      console.error("Error From Add To Cart" , error);
    }finally{
      setloading(false)
      setQuantity(1)
    }
  }

  return (
    <>
      <div className='flex flex-col gap-y-[16px]'>
        <h1 className='text-text_000000 font-Inter font-bold text-[24px] leading-[24px] '>{ProductDetailsdata.name}</h1>
          <div className='flex items-center gap-x-[10px]'>
            <Star rating={ProductDetailsdata.rating}/>
            <span className='inline-block text-text_000000 opacity-[0.5]'>{(`${ProductDetailsdata.review.length}`)} Reviews</span>
            <span className='instockunderline pl-[10px] text-button_DB4444'>Stock</span>
          </div>
        <span className='text-text_000000 font-Inter font-normal text-[24px] leading-[24px] text-justify'>${ProductDetailsdata.price}</span>
        <p className='text-text_000000 font-poppins font-normal text-[16px] mt-[8px] leading-[24px] w-[373px] text-justify border-b-[2px] border-b-gray-300 pb-[24px]'>{ProductDetailsdata.description}</p>
      </div>
      {/* color and size  */}
      <div className='mt-[24px]'>
         <div className='flex items-center gap-x-2'>
            <h1 className='text-[20px] font-Inter font-normal leading-[24px]'>Colors:</h1>
            <div className='flex items-center gap-x-[10px]'>
              <div  className='w-[20px] h-[20px] border-2 border-black flex items-center justify-center rounded-[50%]'>
               <span className='w-[13px] h-[13px] bg-button_DB4444 rounded-[50%] inline-block cursor-pointer'></span>
              </div>
              <div className='w-[20px] h-[20px] border-2 border-black flex items-center justify-center rounded-[50%]'>
                <span className='w-[13px] h-[13px] bg-button_DB4444 rounded-[50%] inline-block cursor-pointer'></span>
              </div>
            </div>
         </div>
        <div className='flex mt-[24px] items-center gap-x-[24px]'>
           <h1 className='text-[20px] font-Inter font-normal leading-[24px]'>Size:</h1>
           <div className='flex items-center gap-x-[16px]'>
             {size?.map((size)=>(
               <span className='border-2 rounded-[4px] w-[32px] h-[32px] flex text-[14px] font-medium font-poppins leading-[21px]  items-center justify-center p-[6px] border-black hover:bg-button_DB4444 hover:text-white cursor-pointer border-opacity-15'>{size.size}</span>
             ))

             }
           </div>
        </div>
      </div>
      {/* card selected button */}
      <div className='mt-[24px] flex items-center gap-x-[16px]'>
         <div className='flex items-center'>
            <span onClick={handleDecrement} className='border-[2px] border-gray-300  rounded-l-[4px] w-[40px] h-[44px] flex items-center justify-center text-[24px] font-bold  py-[5px] px-[8px] cursor-pointer hover:bg-button_DB4444 transition-all duration-300 hover:text-white'>-</span>
            <input className='border-[2px] border-gray-300  text-[20px] font-medium  w-[60px] h-[44px] pl-6  flex items-center justify-center py-[5px] ' value={quantity} />
            <span onClick={()=>setQuantity(quantity + 1)} className='border-[2px] border-gray-300  rounded-r-[4px] text-[24px] font-bold w-[40px] h-[44px] flex items-center justify-center py-[5px] px-[8px] cursor-pointer hover:bg-button_DB4444 transition-all duration-300 hover:text-white'>+</span>
         </div>
         <div>
          {loading ?
            (<button onClick={handleaddtocart} className='bg-button_DB4444 py-[10px] px-[48px] text-[16px] text-white font-medium leading-[24px] rounded'>Loading....</button>)
          :

           (<button onClick={handleaddtocart} className='bg-button_DB4444 py-[10px] px-[48px] text-[16px] text-white font-medium leading-[24px] rounded'>Add To Cart</button>)
          }
         </div>
         <div className='border-2 w-[40px] flex items-center justify-center hover:bg-button_DB4444 hover:text-white text-[32px] rounded h-[40px] cursor-pointer border-black hover:border-white border-opacity-[0.5]'>
           <span><CiHeart /></span>
         </div>
      </div>

      {/* footer section */}
      <div className='mt-[10px] flex flex-col items-start '>
         <div className='flex w-[399px] items-center gap-x-[16px] border-2 border-black rounded pt-[29px] pr-[51px] pb-[16px] pl-[16px]'>
           <span className='inline-block text-[40px]'><TbTruckDelivery /></span>
           <div className='flex flex-col gap-x-[8px] '>
              <h1 className='text-[16px] font-poppins font-medium leading-[24px]'>Free Delivery</h1>
              <NavLink className='text-[12px] font-poppins font-medium leading-[18px] underline'>warrantyInformation</NavLink>
           </div>
         </div>
         <div className='flex items-center w-[399px] gap-x-[16px] border-2 border-black rounded pt-[29px] pr-[51px] pb-[16px] pl-[16px]'>
            <div>
               <img src={Returnicons} alt={Returnicons} />
            </div>
            <div className='flex flex-col gap-x-[8px] '>
              <h1 className='text-[16px] font-poppins font-medium leading-[24px]'>Return Delivery</h1>
              <p>returnPolicy.<NavLink className=" underline ">Details</NavLink></p>
            </div>
         </div>
      </div>
    </>

  )
}

export default ProductContent
