import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const modalProps = { align: "center" };
  const showModal = () => {
    setIsVisible(true);
    document.querySelector("body").style.position = "fixed";
  };
  const closeModal = () => {
    setIsVisible(false);
  };
  return (
    <div className="App">
      <div>
        <div>
          react-modal Accessible modal dialog component for React.JS We maintain
          that accessibility is a key component of any modern web application.
          As such, we have created this modal in such a way that it fulfills the
          accessibility requirements of the modern web. We seek to keep the
          focus on accessibility while providing a functional, capable modal
          component for general use. Installation To install the stable version
          you can use npm or yarn: $ npm install react-modal $ yarn add
          react-modal General Usage The only required prop for the modal object
          is isOpen, which indicates whether the modal should be displayed. The
          following is an example of using react-modal specifying all the
          possible props and options:
        </div>
        <div>
          react-modal Accessible modal dialog component for React.JS We maintain
          that accessibility is a key component of any modern web application.
          As such, we have created this modal in such a way that it fulfills the
          accessibility requirements of the modern web. We seek to keep the
          focus on accessibility while providing a functional, capable modal
          component for general use. Installation To install the stable version
          you can use npm or yarn: $ npm install react-modal $ yarn add
          react-modal General Usage The only required prop for the modal object
          is isOpen, which indicates whether the modal should be displayed. The
          following is an example of using react-modal specifying all the
          possible props and options:
        </div>
        <div>
          react-modal Accessible modal dialog component for React.JS We maintain
          that accessibility is a key component of any modern web application.
          As such, we have created this modal in such a way that it fulfills the
          accessibility requirements of the modern web. We seek to keep the
          focus on accessibility while providing a functional, capable modal
          component for general use. Installation To install the stable version
          you can use npm or yarn: $ npm install react-modal $ yarn add
          react-modal General Usage The only required prop for the modal object
          is isOpen, which indicates whether the modal should be displayed. The
          following is an example of using react-modal specifying all the
          possible props and options:
        </div>
        <button type="button" onClick={showModal}>
          open modal
        </button>
      </div>

      <Modal
        isVisible={isVisible}
        modalProps={modalProps}
        panelClass= {['class1', 'class2']}
        onModalClose={closeModal}
      >
        <div>
          <h1>Start</h1>
          <h2>close</h2>
        </div>
        <input />
        <input />
        <input />
        <input />
      </Modal>
    </div>
  );
}

export default App;
