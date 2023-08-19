import React, { useState } from 'react'
import '../style/style.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const Navigator = useNavigate()
  const [data, setData]= useState({
    email: '',
    password:'',
  })


  const handleLogin = (e)=>{
    e.preventDefault();
    const Data = JSON.parse(localStorage.getItem("user"))
    if(data.email==Data.email && data.password==Data.password){
      Navigator('/userdata')
      alert('Login Successfully')
    }else{
      alert('Invalid Credentials');
    }
  }


  return (
    <div>
      <form className='login' onSubmit={handleLogin}>

        <h3>Login</h3>

        <label for="username">Username</label>
        <input type="text"
        name='email' value={data.email} 
        onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}
        placeholder="Email" id="username" />

        <label for="password">Password</label>
        <input type="password"
        name='password' value={data.password} 
        onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}
        placeholder="Password" id="password" />

        <button>Log In</button>
        <div className='link'>Don't have an account? <Link to='/'>Registration Here</Link> </div>

      </form>
    </div>
  )
}

export default LoginForm