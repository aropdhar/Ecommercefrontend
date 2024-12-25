import React, { useState } from 'react' 
import { category } from '../../../../data/Data'
import { TfiAngleRight } from 'react-icons/tfi'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import banner from '../../../assets/banner.png'

const Homepage = () => {

  const [aftervalue , setafterValue] = useState(0)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        afterChange: function(currentSlide) {
          setafterValue(currentSlide);
        },
        appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px",
                position: 'absolute',
                bottom: "5%",
                left: "50%",
                transform: "translateX(-50%)",
                
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            i == aftervalue ? ( <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: "#DB4444",
                marginRight: "10px",
                borderRadius: "50%",
                cursor: "pointer",
                border: "2px solid #ffff"
              }}
            >
            </div>) : ( <div
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: "#ffff",
                marginRight: "10px",
                opacity: "0.5",
                cursor: "pointer",
              }}
            >
            </div>)
           
          )
          
      };


  return (
    <>
      <div className='container'>
         <div className='flex items-center justify-between'>
            <div className='w-[23%] border-r-[2px] border-r-text_7D8184 '>
               <ul className='pt-[40px]'>
                  {category.map((item)=>(
                    <>
                     <div className='flex items-center justify-between pr-[16px] hover:bg-gray-500 hover:text-white  cursor-pointer transition-all'>
                        <li className='py-[10px] text-[16px] font-poppins font-normal transition-all hover:pl-[10px] leading-[24px] '>{item.category}</li>
                        {item.subcategory &&
                           <span><TfiAngleRight /></span>
                        }
                     </div>
                    </>
                  ))
                  }
               </ul>
            </div>
            <div className='w-[77%] h-[344px] pl-[45px] pt-[15px]'>
                <Slider {...settings}>
                    {[...new Array(10)].map((item , index)=>(
                       <div>
                        <img src={banner} alt={banner} className='w-full h-full object-cover'/>
                       </div>
                    ))} 
                </Slider>
            </div>
         </div>
      </div>
    </>
  )
}

export default Homepage
