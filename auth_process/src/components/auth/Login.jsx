import React, { useState } from 'react'
import "../main.css"
import { MdEmail, MdToken } from "react-icons/md";
import { MdLock } from "react-icons/md";
// import { useAuth0 } from '@auth0/auth0-react';
import { FaUserAlt } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';



function Login() {
  let [state, setState] = useState(false)
  let [data,setData]=useState()
  // const { user, loginWithRedirect } = useAuth0()
  let [userData,setUserData]=useState({
    username:"",
    password:"",
  })
  

  let handleChange=(e)=>{
  let name=e.target.name;
  let value=e.target.value;

  setUserData({...userData,[name]:value})


}

  let postData = async () => {
    try {
      let { username, password } = userData
      if (username === "" && password === "") {
        alert("Please enter username & password")
      }
      else {
        setState(true)
        let formData = new FormData()
        formData.append("username",username)
        formData.append("password",password)
        // http://localhost:8011/api/user/login?username=chitampalle813@gmail.com&password=ramnam
        const response = await axios.get(`${process.env.REACT_APP_LOCAL_URL}/api/user/login?username=${username}&password=${password}`);

        console.log('Response:', response.data);

        setData(response.data.id)
        localStorage.setItem("token",response.data.token)
        
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }


  console.log(userData)
  console.log(data)

  return (
    <>
      <div>
        login
      </div>

      <section>
        <div>
          <MdEmail />
          <input onChange={handleChange} value={userData.username} type="email" name="username" id="username" placeholder='Email id' />
        </div>
        <div>
          <MdLock />
          <input onChange={handleChange} value={userData.password} type="password" name="password" id="password" placeholder='password' />
        </div>

        <div>
          <input  onChange={handleChange}  type="checkbox" name='checkbox' /> <span>keep me logged in</span>
        </div>
        <div className='btn-container'>
          <button onClick={postData}><Link to={state === true ? `/user/bookList/${data}` : "/login"}>Log in</Link></button>
          {/* <button onClick={(e) => loginWithRedirect()}>
                      Continue with Google

                  </button> */}
        </div>
      </section>



    </>
    )
}

export default Login