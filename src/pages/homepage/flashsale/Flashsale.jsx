import React from 'react'
import Heading from '../../../Component/commoncomponent/Heading'
import Timer from '../../../Component/commoncomponent/Timer'
import Productcard from '../../../Component/commoncomponent/Productcard'
import Slider from "react-slick";


const Flashsale = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
    
  return (
    <>
    <div className='my-[140px]'>
        <div className='container'>
            <div>
                <div className='flex items-end gap-x-[87px]'>
                    <Heading title={"Today’s"} description={"Flash Sales"}/>
                    <Timer/>
                </div>
                <div className="slider-container">
                  <Slider {...settings}>
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
    </div>
    </>
  )
}

export default Flashsale
