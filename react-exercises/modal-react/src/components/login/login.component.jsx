import React from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import Modal from "../../Modal";

export const LoginComponent = (props) => {
  const history = useHistory();
  const handleSubmit = () => {
    history.push("/dashboard");
  };

  const modalProps = {
    align: "left",
    esc: false,
    overlayClickClose: false,
    footerInclude: false,
  };

  return (
    <React.Fragment>
      <Modal
        isVisible={props.isLoginVisible}
        ModalTitle="Login"
        modalProps={modalProps}
        panelClass={["class1", "class2"]}
        onModalClose={props.onModalClose}
        onModalConfirmation={handleSubmit}
      >
        <div className="login-form">
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="fname" placeholder="Your email.." />

            <label htmlFor="pwd">Password</label>
            <input type="password" id="pwd" placeholder="Your password.." />

            <input type="submit" value="Submit" onClick={handleSubmit} />
          </form>
        </div>
      </Modal>
    </React.Fragment>
  );
};
