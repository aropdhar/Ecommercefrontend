import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/homepage/Home';
import Rootlayouts from './Component/Rootlayout/Rootlayouts';
import Breadcrum from './Component/commoncomponent/breadcrum/Breadcrum';




const router = createBrowserRouter(
  createRoutesFromElements(
     <Route element={<Rootlayouts/>}>
       <Route path='/' element={<Home/>}/>
       <Route path='/about/me' element={<Breadcrum/>} />
       <Route path='/about/1' element={<Breadcrum/>} />
     </Route>
  )
);

const App = () => {
  return (<RouterProvider router={router} />)
}

export default App
