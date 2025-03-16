import React from 'react'
import Breadcrum from '../../Component/commoncomponent/breadcrum/Breadcrum'
import ImageGallery from './imagegallery/ImageGallery'
import ProductContent from './productcontent/ProductContent'
import { useGetSingleProductQuery } from '../../Features/Api/productApi'

const ProductDetails = () => {
     const { data, error, isLoading } = useGetSingleProductQuery(); 
     
     
   
  return (
    <div>
        <div className="container">
            <Breadcrum/>
            <div className='flex gap-x-[71px] my-5'>
                <div className='w-[55%]'>
                    <ImageGallery image={data?.images}/>
                </div>
                <div className='w-[40%] py-5'>
                    <ProductContent/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails
