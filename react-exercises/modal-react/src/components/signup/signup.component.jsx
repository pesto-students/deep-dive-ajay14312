import React from "react";
import "./signup.css";
import { useHistory } from "react-router-dom";
import Modal from "../../Modal";

export const SignupComponent = (props) => {
  const history = useHistory();
  const handleSubmit = () => {
    history.push("/dashboard");
  };

  return (
    <React.Fragment>
      <Modal
        isVisible={props.isSignupVisible}
        panelClass={["class1", "class2"]}
        onModalClose={props.onModalClose}
        modalProps={{
          width: "80%",
          overlayClickClose: true,
          Enter: false,
          closeBtnText: "Cancel",
          submitBtnText: "Approve",
          ModalTitle: "Signup",
        }}
        onModalConfirmation={handleSubmit}
        isSubmitDisabled={true}
      >
        <div className="signup-form">
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" id="fname" placeholder="Your email.." />

            <label htmlFor="pwd">Password</label>
            <input type="password" id="pwd" placeholder="Your password.." />

            <label htmlFor="confirm-pwd">Confirm Password</label>
            <input
              type="password"
              id="confirm-pwd"
              placeholder="Confirm password.."
            />

            {/* <input type="submit" value="Submit" onClick={handleSubmit} /> */}
          </form>
        </div>
      </Modal>
    </React.Fragment>
  );
};
