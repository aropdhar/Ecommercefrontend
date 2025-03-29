import React from 'react'
import Breadcrum from '../../../Component/commoncomponent/breadcrum/Breadcrum'
import { useGetAllProductQuery , useGetProductCategoryQuery} from '../../../Features/Api/productApi'
import Slider from "react-slick";
import Productcard from '../../../Component/commoncomponent/product/Productcard';
import Heading from '../../../Component/commoncomponent/heading/Heading';

const WishlistComponent = () => {
    const {data , error , isLoading} = useGetAllProductQuery();
    const justforyou = useGetProductCategoryQuery("smartphones");
    console.log(justforyou?.data?.products);
    

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true
      };
    
  return (
    <div className='pt-[30px] pb-[140px]'>
      <div className='container'>
          <Breadcrum/>
          <div className='flex items-center justify-between'>
              <div>
                <h1 className='font-poppins text-[20px] font-normal leading-[26px] '>Wishlist (4)</h1>
              </div>
              <button className='border-2 border-black px-[48px] py-[16px] font-poppins text-[16px] font-medium leading-[24px] rounded'>Move All To Bag</button>
          </div>
          
          {/* wishlist product list */}
          <Slider {...settings}>
            {data?.products?.map((item)=>(
                <div className='pr-[15px]'>
                    <Productcard itemData={item}/>
                </div>
            ))

            }
          </Slider>

          {/* just for you */}
         <div>
            <div className='flex items-center justify-between mt-[95px]'>
                <Heading title="Just For You" description={" "}/>
                <button className='border-2 border-black px-[48px] py-[16px] font-poppins text-[16px] font-medium leading-[24px] rounded'>See All</button>
            </div>
            <Slider {...settings}>
                {justforyou?.data?.products?.map((item)=>(
                    <div className='pr-[15px]'>
                        <Productcard itemData={item}/>
                    </div>
                ))

                }
            </Slider>
         </div>


      </div>
    </div>
  )
}

export default WishlistComponent
