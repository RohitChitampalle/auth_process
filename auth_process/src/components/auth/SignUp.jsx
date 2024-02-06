import React from 'react'
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

function SignUp() {
  return (
      <>
          <div>
              sign up
          </div>

          <section>
              <div>
                  <FaUserAlt />
                  <input type="name" name="username" id="" placeholder='Name' />
              </div>
              <div>
                  <MdEmail />
                  <input type="email" name="email" id="" placeholder='Email id' />
              </div>
              <div>
                  <MdLock />
                  <input type="password" name="password" id="" placeholder='password' />
              </div>

              <div>
                  <MdLock />
                  <input type="password" name='checkbox' id='' placeholder='Confirm Password'/> 
              </div>
              <div className='btn-container'>
                  <button>signup</button>

              </div>
          </section>

      </>
  )
}

export default SignUp