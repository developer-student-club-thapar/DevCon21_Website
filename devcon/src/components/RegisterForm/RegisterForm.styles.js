import styled, { keyframes } from "styled-components";

import { md, xs } from "../../theme/breakpoints";

const fadeRight = keyframes`
    from {
        transform: translate3d(-20px,0,0);
        display: none;
    }
    to {
        transform: translate3d(0,0,0);
    }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .heading {
    font-size: 2rem;

    ${xs} {
      font-size: 1rem;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  ${md} {
    flex-direction: column;
  }
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid #3dbfe8;
  height: 55px;
  padding: 1rem;
  background: #000;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: #fff;
  margin: 1rem 0 0.5rem 0;
  width: 100%;

  &:focus {
    outline: none;
    border-bottom: 2px solid #3dbfe8;
  }

  ${xs} {
    height: 48px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #3dbfe8;
  border: none;
  padding: 1rem;
  margin-top: 1rem;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  opacity: ${(props) => props.disabled && "0.5"};

  span {
    font-size: 1.2rem;
    margin: auto 0;
  }

  &:focus {
    outline: none;
  }

  .icon {
    margin: auto 0;
    font-size: 0.8rem;
    opacity: 0;
  }

  &:hover {
    .icon {
      opacity: 1;
      animation: ${fadeRight};
      animation-duration: 0.2s;
      animation-fill-mode: both;
      animation-timing-function: ease-in-out;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;

  span {
    color: red;
    font-size: 0.8rem;
    margin: 0;
  }

  ${md} {
    width: 100%;
  }
`;

export const TitleRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 2rem;
    cursor: pointer;

    ${xs} {
      font-size: 1rem;
    }
  }
`;
