import React from 'react';
import './header.style.css';

export const Header = (props) => {
  return (
    <div className="header">
      <button className="btn home">Modal Demo</button>
      <button className="btn" onClick={props.openSignup}>Register</button>
      <button className="btn" onClick={props.openLogin}>Login</button>
  </div>
  )
}
