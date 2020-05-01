import React from 'react';
import './signup.style.css';

export const SignupComponent = (props) => {
  return (
    <div className="signup-form">
      <h3 className="text-center"> Signup Form</h3>
      <form>
        <label for="email">Email</label>
        <input type="email" id="fname"  placeholder="Your email.."/>

        <label for="pwd">Password</label>
        <input type="password" id="pwd"  placeholder="Your password.."/>

        <label for="confirm-pwd">Confirm Password</label>
        <input type="password" id="confirm-pwd"  placeholder="Confirm password.."/>

        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}
