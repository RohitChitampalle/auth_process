import React, { useState } from 'react'
import "../main.css"
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { useAuth0 } from '@auth0/auth0-react';


function Login() {
  const { user, loginWithRedirect } = useAuth0()
  let [userData,setUserData]=useState({
    email:"",
    password:""
  })

  let handleChange=(e)=>{
  let name=e.target.name;
  let value=e.target.value;

  setUserData({...userData,[name]:value})


}
  console.log(userData)

  return (
    <>
      <div>
        login
      </div>

      <section>
        <div>
          <MdEmail />
          <input onChange={handleChange} value={userData.email} type="email" name="email" id="email" placeholder='Email id' />
        </div>
        <div>
          <MdLock />
          <input onChange={handleChange} value={userData.password} type="password" name="password" id="password" placeholder='password' />
        </div>

        <div>
          <input  onChange={handleChange}  type="checkbox" name='checkbox' /> <span>keep me logged in</span>
        </div>
        <div className='btn-container'>
          <button>Login</button>
          <button onClick={(e) => loginWithRedirect()}>
                      Continue with Google

                  </button>
         

        </div>
      </section>



    </>
    )
}

export default Login