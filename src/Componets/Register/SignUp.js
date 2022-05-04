import React, { useState } from "react";
import "./SignUp.css";
import RegisterCard from "./RegisterCard";
import RegisterSuccess from "./RegisterSuccess";

const SignUp = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return(
    <>
      <div className="SignUp-container">
        <div className="wrapper">
        </div>
        {!isSubmitted ? (
          <RegisterCard submitForm={submitForm} />
        ) : (
          <RegisterSuccess />
        )}
      </div>
    </>
  );
};
export default SignUp;
