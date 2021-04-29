import React, { useEffect, useContext } from "react";

import { ModalContext } from "../../context/ModalContext";
import { ModalWrapper } from "./Modal.styles";

const Modal = ({ children }) => {
  const { isVisible } = useContext(ModalContext);
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
