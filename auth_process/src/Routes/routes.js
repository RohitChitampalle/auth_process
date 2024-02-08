import {createBrowserRouter} from "react-router-dom";
import SignUp from "../components/auth/SignUp";
import Login from "../components/auth/Login";
import User from "../components/user/User.jsx"
const router = createBrowserRouter(
[

{
    path: "/",
    element: < SignUp />
},
{
    path:"/login",
    element:<Login/>
},{
    path:"/user/:id",
    element:<User/>
}

]




)

export default router