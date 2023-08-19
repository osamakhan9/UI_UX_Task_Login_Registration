import React, { useState } from 'react'
import '../style/reg.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {

  const Navigator = useNavigate()

  const [data, setData]= useState({
    name: '',
    email:'',
    password:'',
    MobileNumber:'',
    age:'',
    address:'',
    occupation:'',
    gender:''
  })


  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!data.name){
      alert('Please enter your Name')
    }else if(!data.email){
      alert("please Enter Email")
    }
    else if(!data.MobileNumber){
      alert ("please Enter Your Phone Number");
    }
    else if(!data.age){
      alert ('please Enter Age');
    }
    else if(!data.address){
      alert ('please Enter Address');
    }
    else if(!data.gender){
      alert ('please Select Gender');
    }
    else if(!data.occupation){
      alert ('please Enter Occupation');
    }
    else if(!data.password){
      alert ('Password is required');
    }
    else{
      localStorage.setItem('user',JSON.stringify(data))
      alert("Registration Successfully")
      Navigator('/login')
    }

  }

  return (
    <div>

      <form className='reg' onSubmit={handleSubmit}>

        <h3>Registration</h3>

        <label for="name">Name</label>
        <input type="text" 
        name='name' value={data.name} 
        onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} placeholder="Alan Walker" id="username" />

        <label for="email">Email</label>
        <input type="email" 
        name='email' value={data.email} 
        onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} 
         placeholder="alanwalker@gmail.com" id="email" />

        <label for="Mobile">Mobile Number</label>
        <input type="number"
        name='MobileNumber' value={data.MobileNumber} 
        onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} 
        placeholder="+91 7376772385" id="mobile" />

        <label for="age">Age</label>
        <input type="number"
        name='age' value={data.age} 
        onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} 
        placeholder="28" id="age" />

        <label for="address">Address</label>
        <input type="text"
        name='address' value={data.address} 
        onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} 
        placeholder="Mumbai, 22 Street" id="address" />

          <label for="gender">Gender</label>
        <div className='gen'>
          <input type="radio"
          name='gender' value='male' 
          checked={data.gender == 'male'}
          onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} 
          /> <label htmlFor="">Male</label>
          <input type="radio"
          name='gender' value='female'
          checked={data.gender == 'female'}
          onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} 
          /> <label htmlFor="">Female</label>
          <input type="radio"
          name='gender' value='prefer not to say'
          checked={data.gender == 'prefer not to say'}
          onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} 
          /> <label htmlFor="">prefer not to say</label>
        </div>

        <label for="occupation">Occupation</label>
        <input type="text"
        name='occupation' value={data.occupation} 
        onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} 
        placeholder="Occupation" id="occupation" />

        <label for="password">Password</label>
        <input type="password"
        name='password' value={data.password} 
        onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} 
        placeholder="Password" id="password" />

        <button>Log In</button>
         <div className='link'>Have already an account? <Link to='/login'>Login Here</Link> </div>
      </form>
    </div>
  )
}

export default RegistrationForm