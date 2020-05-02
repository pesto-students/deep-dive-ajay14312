import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route } from 'react-router-dom';
import { Dashboard } from './components/dashboard/dashboard.component';
import { Home } from './components/home/home.component';


function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const modalProps = { align: "center", width: '400px' };
  const closeModal = () => {
    setIsLoginVisible(false);
    setIsSignupVisible(false);
  };

  const openLogin = () => {
    setIsLoginVisible(true);
  };

  const openSignup = () => {
    setIsSignupVisible(true);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact render={(props) => <Home openSignup={openSignup} openLogin={openLogin}
          modalProps={modalProps} onModalClose={closeModal}
          isSignupVisible={isSignupVisible} isLoginVisible={isLoginVisible}
        />} />
        <Route path='/dashboard' component={Dashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
