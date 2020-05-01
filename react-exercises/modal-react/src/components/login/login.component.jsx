import React from 'react';
import './login.style.css';

export const LoginComponent = (props) => {
  return (
    <div className="login-form">
      <h3 className="text-center"> Login Form</h3> 
      <form>
        <label for="email">Email</label>
        <input type="email" id="fname"  placeholder="Your email.."/>

        <label for="pwd">Password</label>
        <input type="password" id="pwd"  placeholder="Your password.."/>

        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}
