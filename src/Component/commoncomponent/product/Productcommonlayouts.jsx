import React, { useRef } from 'react'
import Productcard from './Productcard'
import Heading from '../heading/Heading'
import Timer from '../timer/Timer'
import Slider from "react-slick";
import { IoMdArrowBack } from 'react-icons/io';
import { IoArrowForward } from 'react-icons/io5';
import ProductSkeleton from '../../../helpers/ProductSkeleton';

const Productcommonlayouts = ({
  ProductCard = () => <ProductSkeleton/>,
  timeStamp = false,
  timeofOffer = 0,
  isArrowsTrue = false,
  heading = "today's",
  description = "flash sale",
  
}) => {
  const sliderRef = useRef(null);
  
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    
  };

  const next = () => {
    sliderRef.current.slickPrev();
  };

  const prev = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <div className='my-[140px]'>
        <div className='container'>

          {/* Flashsale section */}
            <div className='flex items-end justify-between'>
              <div className='flex items-end gap-x-[87px]'>
                <Heading title={"Today’s"} description={"Flash Sales"}/>
                {timeStamp && <Timer timeofOffer={timeofOffer}/>}
                
              </div>
              {isArrowsTrue && (
                <div className='flex items-center gap-x-[8px]'>
                      <h1
                    onClick={next}
                    className="cursor-pointer w-[46px] h-[46px] bg-white_F5F5F5 rounded-full flex items-center justify-center hover:bg-black_363738 hover:text-white_color transition"
                  >
                    <span className="text-xl">
                      <IoMdArrowBack />
                    </span>
                  </h1>
                  <h1
                    onClick={prev}
                    className="cursor-pointer w-[46px] h-[46px] bg-white_F5F5F5 rounded-full flex items-center justify-center hover:bg-black_363738 hover:text-white_color transition"
                  >
                    <span className="text-xl">
                      <IoArrowForward />
                    </span>
                  </h1>
                </div>
              )}
              {/* <div className="bg-button_DB4444  text-md font-popins font-medium text-white_color px-[48px] py-4 rounded cursor-pointer hover:opacity-75">
                 View All
              </div> */}
            </div>

          {/* product section */}
          
            <div className="slider-container">
              <Slider ref={sliderRef} {...settings}>
                {[...new Array(6)].map((_ , index)=>(
                  <div className='pr-[24px]'>
                    <Productcard/>
                  </div>
                ))
                }
              </Slider>
            </div>
          
            
               
        </div>
      </div>
    </>
  )
}

export default Productcommonlayouts
