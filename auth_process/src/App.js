import {RouterProvider} from "react-router-dom";
import React from 'react'
import router from "./Routes/routes";
import {useAuth0} from "@auth0/auth0-react"

function App() {

  return ( 
    <>
 < RouterProvider router = {
   router
 }
 />
    </>
  );
}

export default App;