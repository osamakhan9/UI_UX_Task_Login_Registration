import React from 'react';
import { useNavigate } from "react-router-dom";
import '../style/user.css'

const UserDetails = () => {

	const navigate = useNavigate()

	const userData = JSON.parse(localStorage.getItem('user'));

	const onLogout = ()=>{
		localStorage.removeItem("token");
		navigate('/')
	}

  return (
    <div className='container'>
      <h2>User Details</h2>
      <p>Name: {userData.name}</p>
	  <p>Age: {userData.age}</p>
	  <p>Gender: {userData.gender}</p>
	  <p>Address: {userData.address}</p>
	  <p>Occupation: {userData.occupation}</p>
	  <p>Mobile Number: {userData.MobileNumber}</p>
      <p>Email: {userData.email}</p>
	  <p>Password: {userData.password}</p>
      <button id='btn' onClick={onLogout}>Logout</button>
    </div>
  );
};

export default UserDetails;
