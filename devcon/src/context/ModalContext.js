import React, { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isVisible,
        setIsVisible,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
