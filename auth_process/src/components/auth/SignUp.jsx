import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

function SignUp() {
    let [state,setState]=useState(false)
    let [records, setRecords] = useState()
    let [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        verify_password: ""
    })

    let handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value
        console.log([name])
        setUserData({ ...userData, [name]: value })
    }

    let handleSubmit = (e) => {
        e.preventDefault();
        // const newRecords={...userData}
        // setRecords([...records,newRecords])

    }

    let postData = async () => {
        try {
            let { username, email, password, verify_password } = userData
            if (username === "" && email === "" && password === "" && verify_password === "") {
                alert("required all")
            }
            else{
                setState(true)
                let formData = new FormData()
                formData.append("username",username)
                formData.append("email", email)
                formData.append("password", password)
                formData.append("verify_password", verify_password)

                const response = await axios.post(`${process.env.REACT_APP_LOCAL_URL}/api/user/set`, formData);
                console.log('Response:', response.data);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    console.log("user data", userData)
    //   console.log("record",records)
    return (
        <>
            <div>
                sign up
            </div>

            <form action="" onSubmit={handleSubmit}>
                <div>
                    <FaUserAlt />
                    <input onChange={handleChange} value={userData.username} type="name" name="username" id="" placeholder='Name' />
                </div>
                <div>
                    <MdEmail />
                    <input onChange={handleChange} value={userData.email} type="email" name="email" id="" placeholder='Email id' />
                </div>
                <div>
                    <MdLock />
                    <input onChange={handleChange} value={userData.password} type="password" name="password" id="" placeholder='password' />
                </div>

                <div>
                    <MdLock />
                    <input onChange={handleChange} value={userData.verify_password} type="password" name='verify_password' id='verify_password' placeholder='Confirm Password' />
                </div>
                <div className='btn-container'>
                    <button onClick={postData}><Link to={state === true ? "/login" : "/"}>Sign up</Link></button>
                    <button ><Link to={"/login"}>Login</Link></button>


                </div>
            </form>

        </>
    )
}

export default SignUp