import React, { useState } from 'react'
import image5 from '../../../assets/image 63.png'


const ImageGallery = ({image}) => {
  const[initialimage , setinitialimage] = useState(image[0]);
  const [isEnter , setisEnter] = useState({
    clientX: 0,
    clientY: 0
  });

  const onmouseentre = (img ,event) =>{
    setisEnter({
      ...isEnter,
      clientX: event.clientX,
      clientY: event.clientY
    })  
  }

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
              <img className='w-full h-full object-contain' src={image5} alt={image5} onClick={()=>setinitialimage(image5)}/>
          </div>
      </div>
      <div className='bg-white_F5F5F5 flex items-center justify-center px-[27px] rounded-[5px] pt-[154px] pb-[131px]'>
        <div className='w-[446px] h-[315px]'>
          <img className={`w-full h-full object-contain hover:scale-100`} src={initialimage} alt={initialimage} onMouseMove={(event)=>onmouseentre(initialimage , event)}/>
        </div>
      </div>
    </div>
  )
}

export default ImageGallery
