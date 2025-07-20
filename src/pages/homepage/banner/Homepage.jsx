import React, { useState } from 'react' 
import { category } from '../../../../data/Data'
import { TfiAngleRight } from 'react-icons/tfi'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import banner from '../../../assets/banner.png'
import { useGetAllCategoryQuery , useGetAllBannerQuery } from '../../../Features/Api/exclusiveApi';



const Homepage = () => {

  const [aftervalue , setafterValue] = useState(0)
  const { data, error, isLoading } = useGetAllCategoryQuery();
  const bannerdata = useGetAllBannerQuery();

  
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
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
                (<ul className='pt-[40px]'>
                  {data?.data.map((item , index)=>(
                    <>
                     <div key={index} className='flex items-center justify-between pr-[16px] hover:bg-gray-500 hover:text-white  cursor-pointer transition-all'>
                        <li className='py-[10px] text-[16px] font-poppins font-normal transition-all hover:pl-[10px] leading-[24px] '>{item.title}</li>
                        {item.subcategory.length > 0 &&
                           <span><TfiAngleRight /></span>
                        }
                     </div>
                    </>
                  ))
                  }
                </ul>)
              }
            </div>
            <div className='w-[77%] pl-[45px] pt-[15px]'>
                <Slider {...settings}>
                    {bannerdata?.data?.data.map((item , index)=>(
                      <div key={index} className='w-[892px] h-[344px] overflow-hidden'>
                        <img src={item.image} alt={item.image} className='w-full h-full object-cover'/>
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
