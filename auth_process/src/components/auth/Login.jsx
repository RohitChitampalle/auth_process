import React from 'react'
import "../main.css"
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";

function Login() {
  return (
    <>
      <div>
        login
      </div>

      <section>
        <div>
          <MdEmail />
          <input type="email" name="email" id="" placeholder='Email id' />
        </div>
        <div>
          <MdLock />
          <input type="password" name="password" id="" placeholder='password' />
        </div>

        <div>
          <input type="checkbox" name='checkbox' /> <span>keep me logged in</span>
        </div>
        <div className='btn-container'>
          <button>Login</button>
          <button>Continue with Google</button>

        </div>
      </section>

    </>
    )
}

export default Login