import React from 'react'
import '../style/reg.css'

const RegistrationForm = () => {
  return (
    <div>

      <form className='reg'>

        <h3>Registration</h3>

        <label for="name">Name</label>
        <input type="text" placeholder="Alan Walker" id="username" />

        <label for="email">Email</label>
        <input type="email" placeholder="alanwalker@gmail.com" id="email" />

        <label for="Mobile">Mobile Number</label>
        <input type="number" placeholder="+91 7376772385" id="mobile" />

        <label for="age">Age</label>
        <input type="number" placeholder="28" id="age" />

        <label for="address">Address</label>
        <input type="text" placeholder="Mumbai, 22 Street" id="address" />

          <label for="gender">Gender</label>
        <div className='gen'>
          <input type="radio" /> <label htmlFor="">Male</label>
          <input type="radio" /> <label htmlFor="">Female</label>
          <input type="radio" /> <label htmlFor="">prefer not to say</label>
        </div>

        <label for="occupation">Occupation</label>
        <input type="text" placeholder="Occupation" id="occupation" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button>Log In</button>

      </form>
    </div>
  )
}

export default RegistrationForm