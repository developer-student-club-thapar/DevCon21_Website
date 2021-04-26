import styled from "styled-components";
import { md, xs } from "../../theme/breakpoints";

export const TabButton = styled.div`
  color: ${({ selected }) => (selected ? "#fff" : "#737373")};
  background-color: transparent;
  margin: 10px;
  font-weight: 500;
  font-size: 36px;
  line-height: 51px;
  cursor: pointer;
  margin-right: 25px;

  ${md} {
    font-size: 2.4rem;
    margin-left: 1rem;

    &:first-of-type {
      margin-left: 1rem;
    }
  }

  ${xs} {
    font-size: 1.5rem;
    line-height: 1.6rem;

    &:first-of-type {
      margin-left: 1rem;
    }
  }
`;

export const TimelineSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
`;

export const TabContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Caraousal = styled.div``;

export const Heading = styled.h1`
  font-weight: 800;
  font-size: 120px;
  line-height: 145px;
  color: white;
  margin: 2rem 0 1rem 0;

  ${md} {
    font-size: 6rem;
    padding: 1rem;
  }

  ${xs} {
    font-size: 3rem;
    line-height: 4rem;
    padding: 1rem;
  }
`;

const Card = styled.div`
  width: 350px;
  height: 350px;
  font-size: 10px;
  padding: 5px;
  margin: 10px;
  color: black;
  background-color: white;
  border-radius: 9px;
  overflow: hidden;
`;

export const TimelineCard = styled(Card)`
  display: flex;
  height: 472px;
  width: 472px;
  flex-direction: column;
  position: relative;

  ${md} {
    width: 90%;
    margin: auto;
  }
`;

export const StartingCard = styled(Card)`
  color: white;
  background-color: transparent;
  display: flex;
  flex-direction: row;

  .date-text {
    color: #3daae8;
    font-size: 1.1rem;
    line-height: 1.2rem;
  }

  .day-description {
    font-size: 2rem;
    line-height: 2.2rem;
    font-weight: normal;
  }

  .icon {
    font-size: 3rem;
    align-self: flex-end;
  }

  ${md} {
    margin: auto;
  }
`;

export const CardWrapper = styled.div`
  width: fit-content;
  &:focus {
    outline: none;
  }

  /* ${md} {
    padding: 0 1rem;
  } */
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0 1rem 1rem 0;
  margin-top: auto;
  align-self: flex-end;
`;

export const CardInfo = styled.div`
  font-size: 15px;
  color: black;
  text-align: right;

  h4 {
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.1rem;
    color: #191919;
    margin: 0;
  }

  p {
    color: #737373;
    font-size: 0.7rem;
    font-weight: 300;
    line-height: 0.9rem;
    margin: 0;
  }

  h2 {
    font-size: 1.2rem;
    line-height: 1.4rem;
    font-weight: 600;
    max-width: 60%;
    margin-left: auto;
  }

  h5 {
    margin: 0;
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.2rem;
  }
`;

export const CardCircle = styled.div`
  height: 65px;
  width: 65px;
  border-radius: 50%;
  position: absolute;
  top: 30px;
  right: 0;
  margin: 1rem 1rem 0 0;
  background-color: black;
  align-self: flex-end;
`;

export const CardImg = styled.div`
  border-radius: 0px 0px 100px 0px;
  height: 280px;
  width: 240px;
  box-shadow: 0 0 0 10px #e5e5e5, 0 0 0 20px #f2f2f2;
  position: relative;
  top: -5px;
  left: -5px;
  overflow: hidden;

  .card-img-container {
    height: 280px;
    width: 240px;
  }

  ${md} {
    height: 250px;
    width: 190px;
    .card-img-container {
      height: 250px;
      width: 190px;
    }
  }
`;
