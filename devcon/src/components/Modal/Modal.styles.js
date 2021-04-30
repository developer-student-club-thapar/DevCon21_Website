import styled, { keyframes } from "styled-components";

import { md, xs } from "../../theme/breakpoints";

const fadeUp = keyframes`
    from {
        transform: translate3d(0,100vh,0);
        display: none;
    }
    to {
        transform: translate3d(0,0,0);
    }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${(props) => (props.isVisible ? "block" : "none")};
  animation: ${fadeUp};
  animation-duration: 0.2s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  z-index: 2000;

  .modal-main {
    position: fixed;
    background: #171717;
    width: 50%;
    border-radius: 10px;
    padding: 2rem;
    height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    ${md} {
      width: 90%;
    }

    ${xs} {
      padding: 1rem;
    }
  }
`;
