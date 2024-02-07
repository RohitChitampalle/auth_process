import {createBrowserRouter} from "react-router-dom";
import SignUp from "../components/auth/SignUp";
import Login from "../components/auth/Login";

const router = createBrowserRouter(
[

{
    path: "/",
    element: < SignUp />
},
{
    path:"/login",
    element:<Login/>
}

]




)

export default router