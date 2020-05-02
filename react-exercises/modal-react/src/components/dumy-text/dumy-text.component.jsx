import React from "react";

export const DummyText = (props) => {
  return (
    <div style={{ lineHeight: "30px" }}>
      <div style={{ padding: "50px" }}>
        Developed a simple modal component to support accessibility. Modal
        component accepts below mentioned props.
        <ul style={{ listStyle: "none" }}>
          <li>
            <b>onModalClose: </b>
            <span>
              It accepts a function. Passed function is responsible for close
              the modal.
            </span>
          </li>
          <li>
            <b>modalProps: </b>
            <span>
              It accepts a Object. Passed object should contain below
              properties.
              <pre
                style={{
                  display: "flex",
                  flexDirection: "column",
                  border: "1px solid black",
                  backgroundColor: "#80808038",
                  width: "45%",
                  padding: "20px",
                }}
              >
                <code>align: string</code>
                <code>esc: boolean</code>
                <code>overlayClickClose: boolean</code>
                <code>width:string</code>
                <code>footerInclude: boolean</code>
                <code>closeBtnText: string</code>
                <code>submitBtnText: string</code>
              </pre>
              <p>
                align: changes the modal placement and it accepts three
                properties(left, right and center). By default it is set to
                center
              </p>
              <p>esc: closes on click of Esc button. By default set to true</p>
              <p>
                overlayClickClose: closes when user interacts with backdrop. By
                default set to true
              </p>
              <p>width: user can pass width as per his requirement</p>
              <p>
                footerInclude: user can use in built modal buttons close and
                submit. By default it is set to true.
              </p>
              <p>
                closeBtnText: It accepts a string. user can pass close button
                text.
              </p>
              <p>
                submitBtnText: It accepts an array. user can pass submit button
                text.
              </p>
            </span>
          </li>
          <li>
            <b>ModalTitle: </b>
            <span>It accepts a string. User can set modal title</span>
          </li>
          <li>
            <b>onModalConfirmation: </b>
            <span>
              It accepts a function. Passed function is responsible for success
              call activity
            </span>
          </li>
          <li>
            <b>panelClass: </b>
            <span>
              It accepts an array. user can pass multiple css classes.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
