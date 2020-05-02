import React from "react";
import "./header.css";

export const Header = (props) => {
  return (
    <div className="header">
      <button className="btn home">Modal</button>
      <button className="btn" onClick={props.openSignup}>
        Register
      </button>
      <button className="btn" onClick={props.openLogin}>
        Login
      </button>
    </div>
  );
};
