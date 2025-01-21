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


const router = createBrowserRouter(
  createRoutesFromElements(
     <Route element={<Rootlayouts/>}>
       <Route path='/' element={<Home/>}/>
       <Route path='/About' element={<Productpage/>} />
     </Route>
  )
);

const App = () => {
  return (<RouterProvider router={router} />)
}

export default App
