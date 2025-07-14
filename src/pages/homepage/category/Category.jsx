import React from 'react'
import Productcommonlayouts from '../../../Component/commoncomponent/product/Productcommonlayouts'
import CategoryItem from '../../../Component/commoncomponent/categoryItem/CategoryItem'
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera, CiHeadphones, CiMobile4 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { VscGame } from "react-icons/vsc";
import { getCategory } from '../../../Features/AllSlice/categorySlice';
import { useGetAllCategoryQuery } from '../../../Features/Api/exclusiveApi';

const categorybrowse =[
  {
      id:1,
      name: "Phones",
      img: <CiMobile4 />
  },
  {
      id:2,
      name: "Computers",
      img: <HiOutlineComputerDesktop />
  },
  {
      id:3,
      name: "SmartWatch",
      img: <BsSmartwatch />
  },
  {
      id:4,
      name: "Camera",
      img: <CiCamera />
  },
  {
      id:5,
      name: "HeadPhones",
      img: <CiHeadphones />
  },
  {
      id:6,
      name: "Gaming",
      img: <VscGame />
  },
]

const Category = () => {
  
  const { data, error, isLoading } = useGetAllCategoryQuery();

  let newArr = [];
  data?.data.map((item) => {
    newArr.push({
      id: item?._id,
      name: item?.title,
      image: <BsSmartwatch />,
    });
  });
   

  return (
    <div>
      <Productcommonlayouts 
        isArrowsTrue={true}
        heading={"Categories"}
        description={"Browse By Category"}
        partialItem = {6}
        Productcard={CategoryItem}
        componentData = {newArr}
      />
    </div>
  )
}

export default Category
