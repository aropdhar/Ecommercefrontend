import React from 'react'
import image1 from '../../../assets/image 57.png'
import image2 from '../../../assets/image 58.png'
import image3 from '../../../assets/image 59.png'
import image4 from '../../../assets/image 61.png'
import image5 from '../../../assets/image 63.png'


const ImageGallery = () => {
  return (
    <div className='flex items-center gap-x-[30px]'>
      <div className='flex flex-col items-center gap-y-[16px]'>
        <div className='bg-white_F5F5F5 rounded-[5px] cursor-pointer py-[12px] w-[170px] h-[138px] px-[25px]'>
            <img className='w-full h-full object-contain' src={image1} alt={image1} />
        </div>
        <div className='bg-white_F5F5F5 rounded-[5px] cursor-pointer py-[12px] w-[170px] h-[138px] px-[25px]'>
            <img className='w-full h-full object-contain' src={image2} alt={image2} />
        </div>
        <div className='bg-white_F5F5F5 rounded-[5px] cursor-pointer py-[12px] w-[170px] h-[138px] px-[25px]'>
            <img className='w-full h-full object-contain' src={image3} alt={image3} />
        </div>
        <div className='bg-white_F5F5F5 rounded-[5px] cursor-pointer py-[12px] w-[170px] h-[138px] px-[25px]'>
            <img className='w-full h-full object-contain' src={image4} alt={image4} />
        </div>

      </div>
      <div className='bg-white_F5F5F5 flex items-center justify-center px-[27px] rounded-[5px] pt-[154px] pb-[131px]'>
        <div className='w-[446px] h-[315px]'>
          <img className='w-full h-full object-contain' src={image5} alt={image5} />
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
