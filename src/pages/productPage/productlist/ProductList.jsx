import React from 'react'
import bag1 from '../../../assets/bag1.jpg'
import bag2 from '../../../assets/bag2.jpg'
import joystick from '../../../assets/joystick.png'
import { IoMdPricetags } from 'react-icons/io'
import Star from '../../../Component/commoncomponent/star/Star'
import price from '../../../assets/price.png'

 const size = [
    {id: 1 , size: 'XS'},
    {id: 2 , size: 'S'},
    {id: 3 , size: 'M'},
    {id: 4 , size: 'L'},
    {id: 5 , size: 'XL'},
  ]

const ProductList = ({itemData}) => {

    console.log(itemData);
    
  return (
    <div className='mt-[33px]'>
      <div className='flex p-[20px] rounded-[10px] items-start gap-x-[50px] bg-white_F5F5F5'>
        <div className='w-[250px] h-[300px] overflow-hidden'>
          <img className='w-full h-full object-cover rounded-[10px]' src={itemData.image} alt={itemData.image} />
        </div>
        <div className='flex flex-col gap-y-[15px]'>
           <h1>{itemData.name}</h1>
           <div className='flex items-center justify-between'>
             <div className='w-[77px] h-[16px] overflow-hidden'>
                <img className='w-full h-full object-cover' src={price} alt={price} />
             </div>
             <span className='inline-block text-yellow-700'>${itemData.price}</span>
           </div>
           <div className='flex items-center gap-x-[10px]'>
             <span className='text-gray-500'>Stock |</span>
             <Star rating={itemData.rating}/>
             <span className='inline-block text-gray-500'>({`${itemData.review.length}`}) Reviews</span>
           </div>
           <p className='w-[600px]'>{itemData.description}</p>
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
        </div>
      </div>
    </div>
  )
}

export default ProductList
