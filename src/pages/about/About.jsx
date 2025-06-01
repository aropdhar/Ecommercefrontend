import React, { useState } from 'react'
import Slider from "react-slick";
import Breadcrum from '../../Component/commoncomponent/breadcrum/Breadcrum'
import image from '../../assets/about.png'
import homeicon  from '../../assets/home.png'
import { CiDollar, CiTwitter } from 'react-icons/ci'
import { FaInstagram, FaLinkedinIn, FaShoppingBag } from 'react-icons/fa'
import { FaSackDollar } from 'react-icons/fa6'
import Review from './review/Review';
import { MdVerifiedUser } from 'react-icons/md'
import { RiCustomerServiceFill } from 'react-icons/ri'
import { TbTruckDelivery } from 'react-icons/tb'

const About = () => {
   const [aftervalue , setafterValue] = useState(0)

   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay: true,
      speed: 500,
      afterChange: function(currentSlide) {
         setafterValue(currentSlide);
       },
      appendDots: dots => (
         <div
           style={{
             display: "flex",
             alignItems: "center",
             justifyContent: "center",
             padding: "10px",
           }}
         >
           <ul style={{ margin: "0px" }}> {dots} </ul>
         </div>
       ),
       customPaging: i => (
         i == aftervalue ? ( <div
           style={{
             width: "20px",
             height: "20px",
             backgroundColor: "#DB4444",
             marginRight: "10px",
             borderRadius: "50%",
             cursor: "pointer",
             border: "2px solid #ffff",
             marginTop: "40px"
           }}
         >
         </div>) : ( <div
           style={{
             width: "20px",
             height: "20px",
             borderRadius: "50%",
             backgroundColor: "gray",
             marginRight: "10px",
             opacity: "0.5",
             cursor: "pointer",
             marginTop: "40px"
           }}
         >
         </div>)
        
       )
    };


    const customerService = [
      {
          id:1,
          icons: <TbTruckDelivery />,
          item1: "FREE AND FAST DELIVERY",
          item2: "Free delivery for all orders over $140"
          
      },
      {
          id:2,
          icons: <RiCustomerServiceFill />,
          item1: "24/7 CUSTOMER SERVICE",
          item2: "Friendly 24/7 customer support"
          
      },
      {
          id:3,
          icons: <MdVerifiedUser />,
          item1: "MONEY BACK GUARANTEE",
          item2: "We reurn money within 30 days"
          
      }
  ]

   
   
  return (
    <div className='mb-[140px]'>
      <div className='container'>
        <Breadcrum/>
        {/* bannner section */}
          <div className='flex items-center justify-between mt-[20px]'>
           <div className='flex flex-col gap-y-[24px] '>
              <h1 className='text-[54px] font-semibold font-Inter leading-[64px]'>Our Story</h1>
              <p className='w-[525px] text-[16px] font-normal font-poppins leading-[26px]'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.</p>
              <p className='w-[505px] font-poppins font-normal text-[16px] leading-[26px]'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
           </div>
           <div className='w-[637px] h-[509px] overflow-hidden'>
              <img className='w-full h-full object-cover rounded' src={image} alt={image} />
           </div>
          </div>
         
         {/* counting section */}
           <div className='flex items-center justify-between mt-[140px]'>
              <div className='border-2 flex flex-col items-center justify-center border-[rgba(0, 0, 0, 0.3)] hover:bg-button_DB4444 transition-all duration-300 hover:text-white group cursor-pointer py-[30px] px-[60px] rounded text-center'>
                 <div className='w-[60px]  h-[60px] flex items-center justify-center bg-[rgba(47,46,48,0.31)]   rounded-[50%] p-[8px]'>
                  <div className='bg-black group-hover:bg-white p-[10px] rounded-[50%]'>
                   <img className='group-hover:bg-black'  src={homeicon} alt={homeicon} />
                  </div>
                 </div>
                 <h1 className='mt-[24px] mb-[13px] font-Inter text-[32px] font-bold leading-[30px]'>10.5k </h1>
                 <span className='inline-block text-[16px] font-poppins font-normal leading-[24px]'>Sallers active our site</span>
              </div>
              <div className='border-2 flex flex-col items-center justify-center border-[rgba(0, 0, 0, 0.3)] hover:bg-button_DB4444 transition-all duration-300 hover:text-white group cursor-pointer py-[30px] px-[60px] rounded text-center'>
                     <div className='bg-[rgba(47,46,48,0.31)] flex items-center justify-center p-[8px] rounded-[50%]'>
                       <span className='text-[30px] bg-text_000000 group-hover:bg-white group-hover:text-black inline-block p-[8px] rounded-[50%] text-white'><CiDollar /></span>
                    </div>
                 <h1 className='mt-[24px] mb-[13px] font-Inter text-[32px] font-bold leading-[30px]'>33k</h1>
                 <span className='inline-block text-[16px] font-poppins font-normal leading-[24px]'>Mopnthly Produduct Sale</span>
              </div>
              <div className='border-2 flex flex-col items-center justify-center border-[rgba(0, 0, 0, 0.3)] py-[30px] hover:bg-button_DB4444 transition-all duration-300 hover:text-white group cursor-pointer px-[60px] rounded text-center'>
                  <div className='bg-[rgba(47,46,48,0.31)]  flex items-center justify-center p-[8px] rounded-[50%]'>
                      <span className='text-[30px] group-hover:bg-white group-hover:text-black bg-text_000000 inline-block p-[8px] rounded-[50%] text-white'><FaShoppingBag /></span>
                  </div>
                 <h1 className='mt-[24px] mb-[13px] font-Inter text-[32px] font-bold leading-[30px]'>45.5k</h1>
                 <span className='inline-block text-[16px] font-poppins font-normal leading-[24px]'>Customer active in our site</span>
              </div>
              <div className='border-2 flex flex-col items-center justify-center border-[rgba(0, 0, 0, 0.3)] py-[30px] hover:bg-button_DB4444 transition-all duration-300 hover:text-white group cursor-pointer px-[60px] rounded text-center'>
                 <div className='bg-[rgba(47,46,48,0.31)] flex items-center justify-center p-[8px] rounded-[50%]'>
                      <span className='text-[30px] bg-text_000000 inline-block p-[8px] rounded-[50%] text-white group-hover:bg-white group-hover:text-black'><FaSackDollar /></span>
                  </div>
                 <h1 className='mt-[24px] mb-[13px] font-Inter text-[32px] font-bold leading-[30px]'>25k</h1>
                 <span className='inline-block text-[16px] font-poppins font-normal leading-[24px]'>Anual gross sale in our site</span>
              </div>
           </div>
          
          {/* review section */}
         

         <div className="slider-container">
            <Slider {...settings}>    
               {[...Array(10)].map((item)=>(
                  <Review/>
               ))

               }
            </Slider>
         </div>

         {/* customer service */}
         <div className='mt-[120px]'>  
                <div className='flex justify-around items-center'>
                    {customerService.map((item , index)=>(
                        <div className='flex flex-col gap-y-[5px] items-center'>
                            <div className='bg-[rgba(47,46,48,0.11)] flex items-center justify-center p-[10px] rounded-[50%]'>
                              <span className='text-[40px] bg-text_000000 inline-block p-[10px] rounded-[50%] text-white'>{item.icons}</span>
                            </div>
                            <h3 className='text-[20px] font-poppins font-semibold leading-[28px]'>{item.item1}</h3>
                            <p className='text-[14px] font-poppins font-normal leading-[21px]'>{item.item2}</p>
                        </div>
                    ))

                    }
                </div>
         </div>
      </div>
    </div>
  )
}

export default About
