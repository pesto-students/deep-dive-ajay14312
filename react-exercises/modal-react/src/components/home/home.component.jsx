
import React from 'react';
import Modal from "../../Modal";
import { SignupComponent } from '../signup/signup.component';
import { LoginComponent } from '../login/login.component';
import { Header } from '../header/header.componet';
import {DummyText} from '../dumy-text/dumy-text.component';
import './home.style.css';

export const Home = (props) => {
  return (
    <div className="App">
      <Header openSignup ={props.openSignup} openLogin={props.openLogin}/>
      <DummyText/>
      
      {props.isLoginVisible && <Modal
        isVisible={props.isLoginVisible}
        modalProps={props.modalProps}
        panelClass={["class1", "class2"]}
        onModalClose={props.onModalClose}
      >
        <LoginComponent handleSubmit ={props.handleSubmit }/>
      </Modal>}

      {props.isSignupVisible && <Modal
        isVisible={props.isSignupVisible}
        modalProps={props.modalProps}
        panelClass={["class1", "class2"]}
        onModalClose={props.onModalClose}
      >
        <SignupComponent handleSubmit ={props.handleSubmit }/>
      </Modal>}

      {/* {secondVisible && <Modal isVisible={secondVisible} onModalClose={check}>check</Modal>} */}
    </div>
  );
}

