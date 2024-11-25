import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
     <Route>
       <Route path='/home' element={"this router is home"}/>
     </Route>
  )
);

const App = () => {
  return (<RouterProvider router={router} />)
}

export default App
