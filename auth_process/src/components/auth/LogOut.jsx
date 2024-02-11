import React from 'react'
import { Link } from 'react-router-dom'

function LogOut() {
    let removeToken=()=>{

        localStorage.removeItem("token")

    }
  return (
    <button onClick={removeToken}><Link to={"/login"}>Log out</Link></button>
  )
}

export default LogOut