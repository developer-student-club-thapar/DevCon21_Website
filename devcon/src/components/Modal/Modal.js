import React, { useEffect } from "react";

import { ModalWrapper } from "./Modal.styles";

const Modal = ({ isVisible, setIsVisible, children }) => {
  useEffect(() => {
    isVisible
      ? (document.documentElement.style.overflow = "hidden")
      : (document.documentElement.style.overflow = "visible");
  }, [isVisible]);
  return (
    <ModalWrapper isVisible={isVisible}>
      <div className="modal-main">{children}</div>
    </ModalWrapper>
  );
};

export default Modal;
