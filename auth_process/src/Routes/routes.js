import {createBrowserRouter} from "react-router-dom";
import SignUp from "../components/auth/SignUp";
import Login from "../components/auth/Login";
import User from "../components/user/User"
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
    path: "/user/bookList/:id",
    element:<User/>
}

]




)

export default router