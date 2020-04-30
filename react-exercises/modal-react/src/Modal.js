import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let showHideClassName = this.props.isVisible
      ? "modal display-block"
      : "modal display-none";

    let customClassNames = '';
    try {
      customClassNames = this.props.panelClass.join(',');
    } catch (_) {
      // do nothing
    }
    return (
      <React.Fragment>
        <div className={showHideClassName}>
          <section className={`modal-main ${customClassNames}`}>
            {this.props.children}
            <button onClick ={this.props.onModalClose}>close</button>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
