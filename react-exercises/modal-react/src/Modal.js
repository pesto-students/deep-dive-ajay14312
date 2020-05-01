import React, { Component } from "react";
import ReactDOM from 'react-dom'
import "./Modal.css";

const overlay = document.createElement('div');
overlay.id = 'overlay-container'
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ""
    };
    this.element = document.createElement('div');

    this.node = '';
  }

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClick, false);
    document.removeEventListener('keydown', this.captureKey, false);
    overlay.removeChild(this.element);
  }

  handleClick = (e) => {
    if(this.node.contains(e.target)) {
      return;
    }
    if(document.activeElement.toString() === "[object HTMLBodyElement]" && e.keyCode === 27) {
      this.props.onModalClose();
    }

    this.props.onModalClose();
  }

  componentDidMount = () => {
    document.addEventListener('mousedown', this.handleClick, false);
    document.addEventListener('keydown', this.captureKey, false);
    document.querySelector('body').appendChild(overlay);
    overlay.appendChild(this.element);
    this.setState(() => {
      return {
        list: document
          .getElementById("childrenDiv")
          .querySelectorAll(["input", "button"]),
      };
    });
    setTimeout(() => {
      document
          .getElementById("childrenDiv")
          .querySelectorAll(["input", "button"])[0].focus();
    }, 500)
  };

  captureKey = (event) => {
    //event.persist();
    if (event.keyCode === 9) {
      if (
        document.activeElement === this.state.list[this.state.list.length - 1]
      ) {
        this.state.list[0].focus();
      }
    }
    if (event.shiftKey && event.key === "Tab") {
      console.log(event.keyCode);
      if (document.activeElement === this.state.list[0]) {
        this.state.list[this.state.list.length - 1].focus();
      }
    }

    if (event.keyCode === 27) {
      this.props.onModalClose();
    }
  };

  render() {
    let showHideClassName =this.props.isVisible
        ? "modal display-block"
        : "modal display-none";
    if (!showHideClassName) {
      return null;
    };

    let customClassNames = '';
    try {
      customClassNames = this.props.panelClass.join(',');
    } catch (_) {
      // do nothing
    }

    let overlayNode = <React.Fragment>
      <div
        className={showHideClassName}
        onKeyDown={this.captureKey}
        id="childrenDiv"
      >
        <section className={`modal-main ${customClassNames}`} ref={node => this.node = node}>
        {this.props.children}
        </section>
      </div>
    </React.Fragment>
    
    return (
      ReactDOM.createPortal(overlayNode, this.element)
    );
  }
}

export default Modal;
