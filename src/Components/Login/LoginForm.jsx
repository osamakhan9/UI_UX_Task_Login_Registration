import React from 'react'
import '../style/style.css'

const LoginForm = () => {
  return (
    <div>
      <form className='login'>
        
        <h3>Login</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username"/>

          <label for="password">Password</label>
          <input type="password" placeholder="Password" id="password"/>

            <button>Log In</button>
            
          </form>
        </div>
        )
}

        export default LoginForm