import React from 'react';
import { Link } from "react-router-dom";
import { Button } from './Button';
import './SignUp.css';

function SignUp() {
    return (
        <>
        <div className="SignUp-container">
        <div className="wrapper">
          <h1>Register an account</h1>
              <form action="/register" method="POST">
                <div>
                  <label for="Username">Username</label>
                  <input className="Username" id="Username" placeholder="Enter your username" required></input>
                </div>
                <div>
                  <label for="Email">Email   </label>
                  <input className="Email" id="Email"  placeholder="Enter your email" required></input>
                </div>
                <div>
                  <label for="Password">Password</label>
                  <input className="Password" id="Password"  placeholder="Enter your password" required></input>
                </div>
                  <div className='hero-btns'>
                    <Button
                      className='btn'
                      buttonStyle='btn--outline'
                      buttonSize='btn--large'
                     >
                      Sign Up
                     </Button>
                 </div>
               </form>
              <a href="/login">Log In to an existing account</a>
           </div>
          </div>
      </>
    );
  }
  
  export default SignUp;