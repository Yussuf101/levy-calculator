import React from 'react';
import { Link } from "react-router-dom";
import { Button } from './Button';

function SignUp() {
    return (
        <>
        <div className="signUp-container">
        <div className="wrapper">
            <form className="login-form">
              <p>Enter your Username</p>
              <input classname="username" placeholder="Username"></input>
              <p>Enter your Password</p>
              <input classname="password" placeholder="password"></input>
              <Link className="signup-link" to="/Login"><p>To LogIn to your account</p></Link>
              <div className='hero-btns'>
                <Button
                  className='btn'
                  buttonStyle='btn--outline'
                  buttonSize='btn--large'>
              Sign up
               </Button>
            </div>            
           </form>
           </div>
          </div>
      </>
    );
  }
  
  export default SignUp;