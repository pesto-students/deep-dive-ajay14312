import React from "react";
import { SignupComponent } from "../signup/signup.component";
import { LoginComponent } from "../login/login.component";
import { Header } from "../header/header.componet";
import { DummyText } from "../dumy-text/dumy-text.component";
import "./home.css";

export const Home = (props) => {
  return (
    <div className="App">
      <Header openSignup={props.openSignup} openLogin={props.openLogin} />
      <DummyText />

      {props.isLoginVisible && (
        <LoginComponent
          handleSubmit={props.handleSubmit}
          isLoginVisible={props.isLoginVisible}
          onModalClose={props.onModalClose}
        />
      )}

      {props.isSignupVisible && (
        <SignupComponent
          handleSubmit={props.handleSubmit}
          isSignupVisible={props.isSignupVisible}
          onModalClose={props.onModalClose}
        />
      )}
    </div>
  );
};
