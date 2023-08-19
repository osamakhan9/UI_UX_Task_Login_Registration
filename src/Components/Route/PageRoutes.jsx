import React from 'react'
import { Routes,Route } from 'react-router'
import RegistrationForm from '../Registration/RegistrationForm'
import LoginForm from '../Login/LoginForm'
import UserDetails from '../UserDetail/UserDetails'

const PageRoutes = () => {
  return (
	<div>
		<Routes>
			<Route path='/' element={<RegistrationForm/>}/>
			<Route path='/login' element={<LoginForm/>}/>
			<Route path='/userdata' element={<UserDetails/>}/>
		</Routes>
	</div>
  )
}

export default PageRoutes