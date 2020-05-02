import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";
import { BrowserRouter, Route, re } from 'react-router-dom';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { Dashboard } from './components/dashboard/dashboard.component';
import { Home } from './components/home/home.component';
import { useHistory } from "react-router-dom";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [secondVisible, setSecondVisible] = useState(false);
  const modalProps = { align: "center", width: '400px' };
  const showModal = () => {
    setIsVisible(true);
  };
  const closeModal = () => {
    setIsVisible(false);
    setIsLoginVisible(false);
    setIsSignupVisible(false);
  };
  const showCheck = () => {
    setSecondVisible(true);
  };
  const check = () => {
    setSecondVisible(false);
  };

  const openLogin = () => {
    setIsLoginVisible(true);
  };

  const openSignup = () => {
    setIsSignupVisible(true);
  };

  const handleSubmit = (event) => {
    // const history = useHistory();
    // history.push("/dashboard");

    event.preventDefault();
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact render={(props) => <Home openSignup={openSignup} openLogin={openLogin}
          modalProps={modalProps} onModalClose={closeModal}
          isSignupVisible={isSignupVisible} isLoginVisible={isLoginVisible} handleSubmit={handleSubmit}
        />} />
        <Route path='/dashboard' component={Dashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
