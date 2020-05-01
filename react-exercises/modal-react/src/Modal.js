import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const overlay = document.createElement("div");
overlay.id = "overlay-container";

const tabbleList = [
  "a[href]",
  "area[href]",
  "input:not([disabled])",
  "button:not([disabled])",
  "[contendeditable]",
  "textarea:not([disabled])",
  "select:not([disabled])",
  "iframe",
  "object",
  "embed"
];

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };

    this.element = document.createElement("div");
    this.node = "";
    this.activeElement = '';
    if (this.props.isVisible) {
      document.querySelector("html").style.overflow = 'hidden';
    }
  }

  componentWillUnmount = () => {
    document.removeEventListener("mousedown", this.handleClick, false);
    document.removeEventListener("keydown", this.captureKey, false);
    overlay.removeChild(this.element);
    document.querySelector("html").style.overflow = 'auto';
  };

  handleClick = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    // if ( document.activeElement.toString() === "[object HTMLBodyElement]" && e.keyCode === 27) {
    //   this.props.onModalClose();
    //   this.activeElement.focus();
    // }
    this.closeOverlay();
  };

  componentDidMount = () => {
    this.activeElement = document.activeElement;
    document.addEventListener("mousedown", this.handleClick, false);
    document.addEventListener("keydown", this.captureKey, false);
    document.querySelector("body").appendChild(overlay);
    overlay.appendChild(this.element);

    this.setState(() => {
      const arrList = Array.prototype.slice.call(document.getElementById("childrenDiv").querySelectorAll(tabbleList))
      return {
        list: arrList
      };
    });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevProps.isVisible === this.props.isVisible &&
      this.props.isVisible === true) {
        this.focusFirstElement();
    }
  };

  focusFirstElement = () => {
    if (this.state.list[1]) {
      this.state.list[1].focus();
    } else {
      this.state.list[0].focus();
    }
  }

  captureKey = (event) => {
    if (event.keyCode === 9) {
      if (!this.state.list.includes(document.activeElement)) {
        event.preventDefault();
        this.focusFirstElement();
      } else if (event.shiftKey) {
        if (document.activeElement === this.state.list[0]) {
          event.preventDefault();
          this.state.list[this.state.list.length - 1].focus();
        }
      } else {
        if (document.activeElement === this.state.list[this.state.list.length - 1]) {
          event.preventDefault();
          this.state.list[0].focus();
        }
      }
    } else if (event.keyCode === 27) {
      this.closeOverlay();
    }
  };

  closeOverlay = () => {
    this.props.onModalClose();
    this.activeElement.focus();
  }

  render() {
    const showHideClassName = this.props.isVisible ? "show" : "display-none";
    const alignModal = this.props.modalProps && this.props.modalProps.align? this.props.modalProps.align : 'center';

    if (!showHideClassName) {
      return null;
    }

    const customClassNames = this.props.panelClass?this.props.panelClass.join(' '):'';

    const overlayNode = (
      <div
        className={`modal ${showHideClassName}`}
        onKeyDown={this.captureKey}
        id="childrenDiv"
        role="dialog">
        <div className={`modal-content ${alignModal === 'left'?'modal-content-left':''} ${alignModal === 'right'?'modal-content-right':'' } ${customClassNames} ${alignModal === 'center'?'modal-content-center':''}`} ref={(node) => (this.node = node)}>
          <div className="modal-header">
            <button className="close" onClick={this.closeOverlay}>&times;</button>
            <h2>Modal Header</h2>
          </div>
          <div className="modal-body">
            {this.props.children}
          </div>
          <div className="modal-footer">
            
            <h3>Modal Footer</h3>
          </div>
        </div>
      </div>
    );

    return ReactDOM.createPortal(overlayNode, this.element);
  }
}

export default Modal;
