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

    return (
      <React.Fragment>
        <div className={showHideClassName}>
          <section className="modal-main">
            {this.props.children}
            <button>close</button>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
