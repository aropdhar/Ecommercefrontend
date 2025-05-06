import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/homepage/Home';
import Rootlayouts from './Component/Rootlayout/Rootlayouts';
import Productpage from './pages/productPage/productpage';
import ProductDetails from './pages/productsdetails/ProductDetails';
import Error from './pages/error/Error';
import Login from './pages/auth/login/Login';
import Wishlist from './pages/wishlist/Wishlist';
import Addtocart from './pages/addtocart/Addtocart';
import About from './pages/about/About';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
       <Route element={<Rootlayouts/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Productpage/>} />
        <Route path='/productdetails/:id' element={<ProductDetails/>} />
        <Route path='/productdetails' element={<Productpage/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/addtocart' element={<Addtocart/>} />
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Error/>}/>
      </Route>
    </Route>
  )
);

const App = () => {
  return (<RouterProvider router={router} />)
}

export default App
