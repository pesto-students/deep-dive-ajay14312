import React, { Component } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./Modal.css";

const modalContainer = document.createElement("div");
modalContainer.id = "modal-container";
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
  "embed",
];

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };

    this.element = document.createElement("div");
    this.modalContentNode = "";
    this.activeElement = "";
    if (this.props.isVisible) {
      document.querySelector("html").style.overflow = "hidden";
    }

    this.modifiedModalProps = {
      ...Modal.defaultProps.modalProps,
      ...this.props.modalProps,
    };
  }

  focusFirstElement = () => {
    if (this.state.list[1]) {
      this.state.list[1].focus();
    } else {
      this.state.list[0].focus();
    }
  };

  componentDidMount = () => {
    if (this.props.isVisible) {
      this.activeElement = document.activeElement;
      document.addEventListener("mousedown", this.handleClick, false);
      document.addEventListener("keydown", this.captureKey, false);
      document.querySelector("body").appendChild(modalContainer);
      modalContainer.appendChild(this.element);

      this.setState(() => {
        if (this.props.isVisible) {
          const arrList = Array.prototype.slice.call(
            document.getElementById("childrenDiv").querySelectorAll(tabbleList)
          );
          return {
            list: arrList,
          };
        }
      });
    }
  };

  componentDidUpdate = (prevProps) => {
    if (
      prevProps.isVisible === this.props.isVisible &&
      this.props.isVisible === true
    ) {
      this.focusFirstElement();
    }
  };

  componentWillUnmount = () => {
    document.removeEventListener("mousedown", this.handleClick, false);
    document.removeEventListener("keydown", this.captureKey, false);
    modalContainer.removeChild(this.element);
    document.querySelector("html").style.overflow = "auto";
  };

  handleClick = (e) => {
    if (this.modifiedModalProps.overlayClickClose) {
      if (this.modalContentNode.contains(e.target)) {
        return;
      }
      this.closeOverlay();
    }
  };

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
        if (
          document.activeElement === this.state.list[this.state.list.length - 1]
        ) {
          event.preventDefault();
          this.state.list[0].focus();
        }
      }
    } else if (event.keyCode === 27 && this.modifiedModalProps.esc) {
      this.closeOverlay();
    } else if (
      event.keyCode === 13 &&
      this.props.onModalConfirmation &&
      this.Enter
    ) {
      this.props.onModalConfirmation();
    }
  };

  closeOverlay = () => {
    this.props.onModalClose();
    this.activeElement.focus();
  };

  render() {
    if (!this.props.isVisible) {
      return null;
    } else {
      const showHideClassName = this.props.isVisible ? "show" : "display-none";
      const alignModal = this.modifiedModalProps.align;
      const modalWidth = this.modifiedModalProps.width;

      if (!showHideClassName) {
        return null;
      }

      const customClassNames = this.props.panelClass
        ? this.props.panelClass.join(" ")
        : "";

      const overlayNode = this.props.isVisible ? (
        <div
          className={`modal ${showHideClassName}`}
          onKeyDown={this.captureKey}
          id="childrenDiv"
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal_desc"
          aria-modal="true"
        >
          <div
            className={`modal-content
            ${alignModal === "left" ? "modal-content-left" : ""}
            ${alignModal === "right" ? "modal-content-right" : ""}
            ${alignModal === "center" ? "modal-content-center" : ""}
            ${!this.modifiedModalProps.footerInclude? "justify-content-start": ''}
            ${customClassNames}`}
            ref={(node) => (this.modalContentNode = node)}
            style={{ width: modalWidth ? modalWidth : "" }}
          >
            <div className="modal-header">
              <button className="close" onClick={this.closeOverlay}>
                &times;
              </button>
              <h2 id="modal-title">{this.props.ModalTitle}</h2>
            </div>
            <div className="modal-body" id="modal_desc">
              {this.props.children}
            </div>
            {this.modifiedModalProps.footerInclude ? (
              <div className="modal-footer">
                <button
                  type="button"
                  className="close-btn"
                  onClick={this.closeOverlay}
                >{this.modifiedModalProps.closeBtnText}</button>
                <button
                  className="submit-btn"
                  type="button"
                  onClick={() => this.props.onModalConfirmation()}
                  disabled={this.props.isSubmitDisabled}
                >
                {this.modifiedModalProps.submitBtnText}
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null;

      return ReactDOM.createPortal(overlayNode, this.element);
    }
  }
}

Modal.propTypes = {
  ModalTitle: PropTypes.string.isRequired,
  modalProps: PropTypes.shape({
    align: PropTypes.string,
    esc: PropTypes.bool,
    overlayClickClose: PropTypes.bool,
    width: PropTypes.string,
    footerInclude: PropTypes.bool,
    closeBtnText: PropTypes.string,
    submitBtnText: PropTypes.string
  }),
  onModalClose: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  panelClass: PropTypes.array,
  onModalConfirmation: PropTypes.func,
  isSubmitDisabled: PropTypes.bool.isRequired
};

Modal.defaultProps = {
  isSubmitDisabled: false,
  modalProps: {
    align: "center",
    esc: true,
    overlayClickClose: false,
    width: "",
    footerInclude: true,
    Enter: true,
    closeBtnText: 'Close',
    submitBtnText: 'Submit'
  },
  ModalTitle: "Modal Header",
};

export default Modal;
