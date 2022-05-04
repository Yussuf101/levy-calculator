import React from 'react';
import { Link } from "react-router-dom";
import { Button } from './Button';


function Login() {
    return (
        <>
        <div className="login-container">
          <div className="wrapper">
            <form className="login-form">
              <p>Enter your Username</p>
              <input classname="username" placeholder="Username"></input>
              <p>Enter your Password</p>
              <input classname="password" placeholder="password"></input>
              <Link className="signup-link" to="/SignUp"><p>Create a new account</p></Link>
              <div className='hero-btns'>
                <Button
                  className='btn'
                  buttonStyle='btn--outline'
                  buttonSize='btn--large'
            >
              Login
               </Button>
            </div>            
           </form>
           </div>
          </div>
      </>
    );
  }
  
  export default Login;