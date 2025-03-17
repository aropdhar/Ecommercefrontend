import React, { useRef } from "react";
import Slider from "react-slick";
import Breadcrum from '../../Component/commoncomponent/breadcrum/Breadcrum'
import ImageGallery from './imagegallery/ImageGallery'
import ProductContent from './productcontent/ProductContent'
import { useGetSingleProductQuery } from '../../Features/Api/productApi'
import { useParams } from 'react-router-dom'
import Skeleton from '../../skeleton/Skeleton'
import Heading from '../../Component/commoncomponent/heading/Heading'
import Productcard from '../../Component/commoncomponent/product/Productcard'
import { useGetProductCategoryQuery} from "../../Features/Api/productApi";

const ProductDetails = () => {
    const params = useParams();
    const { data, error, isLoading } = useGetSingleProductQuery(parseInt(params?.id)); 
    const  categorydata  = useGetProductCategoryQuery("beauty");
    
    
    
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        autoplay: true
      };
    
   
  return (
    <div>
        <div className="container">
            <Breadcrum/>
            {isLoading ?

             <Skeleton/>

            :
            <div className='flex gap-x-[71px] my-5'>
                <div className='w-[55%]'>
                    <ImageGallery image={data?.images}/>
                </div>
                <div className='w-[40%] py-5'>
                    <ProductContent ProductDetailsdata={data} />
                </div>
            </div>
            }

            {/* related item data */}
            <div className="my-[120px]">
                <Heading title="Related Item" description=" "/>
            
                <Slider {...settings}>
                    {categorydata?.data?.products.map((item , index)=>(
                      <div className="px-3">
                        <Productcard itemData={item}/>
                      </div> 
                    ))

                    }
                </Slider>
                
            </div>
            {/* related item data */}
        </div>
    </div>
  )
}

export default ProductDetails
