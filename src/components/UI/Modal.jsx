import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ justCloseModal }) => {
  return <div onClick={justCloseModal} className="backdrop"></div>;
};

const ModalOverlay = (props) => {
  return <div className="modal">{props.children}</div>;
};

//helper constant
const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop justCloseModal={props.justCloseModal} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
