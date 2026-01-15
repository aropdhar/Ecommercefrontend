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
import Myaccount from './pages/accout/Myaccount';
import Signup from './pages/auth/signup/Signup';
import Contact from './pages/contact/Contact';
import Forgetpassword from './pages/auth/forgatpassword/Forgetpassword';
import Checkout from './pages/checkout/Checkout';
import OtpVerify from './pages/otpverify/OtpVerify';
import PaymentSuccess from './pages/paymentsuccess/PaymentSuccess';
import PaymentError from './pages/paymenterror/PaymentError';
import PaymentCancel from './pages/paymentcancel/PaymentCancel';


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
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/myaccount' element={<Myaccount/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/forgetpassword' element={<Forgetpassword/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/verifyotp/:Email' element={<OtpVerify/>}/>
        <Route path='/success' element={<PaymentSuccess/>}/>
        <Route path='/failed' element={<PaymentError/>}/>
        <Route path='/cancel' element={<PaymentCancel/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Route>
  )
);

const App = () => {
  return (<RouterProvider router={router} />)
}

export default App
