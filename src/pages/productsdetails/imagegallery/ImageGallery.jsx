import React, { useState } from 'react'
import image5 from '../../../assets/image 63.png'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'
import banner from '../../../assets/banner.png'

const ImageGallery = ({image}) => {
  const[initialimage , setinitialimage] = useState( image &&(image[0] || 'https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png)'));

  
  
  

  return (
    <div className='flex items-center gap-x-[30px]'>
      <div className='grid grid-flow-col grid-rows-4 gap-y-4'>
          {image?.map((singleimage)=>( 
            <div className='bg-white_F5F5F5 rounded-[5px] cursor-pointer py-[12px] w-[170px] h-[138px] px-[25px]' >
              <img className='w-full h-full object-contain' src={singleimage} alt={singleimage} onClick={()=>setinitialimage(singleimage)}/>
            </div>
          ))
          }
          <div className='bg-white_F5F5F5 rounded-[5px] cursor-pointer py-[12px] w-[170px] h-[138px] px-[25px]' >
              <img className='w-full h-full object-cover' src={banner} alt={banner} onClick={()=>setinitialimage(banner)}/>
          </div>
      </div>
      <div className='bg-white_F5F5F5 flex items-center justify-center px-[27px] rounded-[5px] pt-[154px] pb-[131px]'>
        <div className='w-[446px] h-[315px] overflow-hidden'>
          <InnerImageZoom className='w-full h-full object-cover'  src={initialimage} />
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
