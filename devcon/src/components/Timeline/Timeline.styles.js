import styled from "styled-components";

export const TabButton = styled.div`
  color: ${({ selected }) => (selected ? "#fff" : "#737373")};
  background-color: transparent;
  margin: 10px;
  font-weight: 500;
  font-size: 36px;
  line-height: 51px;
  cursor: pointer;
  margin-right: 25px;
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
  font-size: 120px;
  font-weight: 800;
  line-height: 75px;
`;

const Card = styled.div`
  // width: 175px;
  // height: 175px;
  width: 350px;
  height: 350px;
  font-size: 10px;
  padding: 5px;
  margin: 10px;
  color: black;
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
`;

export const TimelineCard = styled(Card)`
  display: flex;
`;

export const StartingCard = styled(Card)`
  color: white;
  background-color: transparent;
  display: flex;
  felx-direction: column;
`;

export const CardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const CardInfo = styled.div`
  font-size: 15px;
  color: black;
  text-align: right;
`;

export const CardCircle = styled.div`
  height: 65px;
  width: 65px;
  border-radius: 50%;
  margin-bottom: 75px;
  margin-right: 25px;
  background-color: black;
  align-self: flex-end;
`;

export const CardImg = styled.div`
  border-radius: 0px 0px 40px 0px;
  height: 180px;
  width: 300px;
  box-shadow: 0 0 0 5px #e5e5e5, 0 0 0 10px #f2f2f2;
  position: relative;
  top: -5px;
  left: -5px;
  overflow: hidden;
`;
