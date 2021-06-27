import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { AiOutlineRightCircle } from "react-icons/ai";
// import { BiLeftArrow } from "react-icons/bi";
// import { StaticImage } from "gatsby-plugin-image";
import tempSpeaker from "../../images/tempSpeaker.jpg";
import { useBreakpoint } from "gatsby-plugin-breakpoints";
import {FaYoutube} from 'react-icons/fa'
import {
  TimelineCard,
  StartingCard,
  CardImg,
  CardCircle,
  CardInfo,
  CardSection,
  TimelineSection,
  TabContainer,
  TabButton,
  Heading,
  Caraousal,
  CardWrapper,
  // DummyCard,
} from "./Timeline.styles";
import {ActionButton} from '../Hero/Hero.styles'
import { data } from "../../data/sessions";

// const dummyDescription = `This session is organized to put light on the fact that Data
// Structures and Algorithms are not only important for clearing
// interviews, but for developing problem solving skills too!`;

const Timeline = () => {
  const [day, setDay] = useState("day1");
  const breakpoints = useBreakpoint();
  const slider = useRef(null);

  const resetSlide = () => {
    slider.current?.slickGoTo(0);
  };

  useEffect(() => {
    resetSlide();
  }, [day]);

  const renderNoOfSildes = () => {
    if (breakpoints.xs) {
      return 1;
    } else if (breakpoints.sm) {
      return 1;
    } else if (breakpoints.md) {
      return 2;
    } else if (breakpoints.l) {
      return 3;
    } else if (breakpoints.xl) {
      return 3;
    } else {
      return 3;
    }
  };

  const Tab = ({ current, value, children }) => (
    <TabButton selected={current === value} onClick={() => setDay(value)}>
      {children}
    </TabButton>
  );
  const settings = {
    arrows: false,
    infinite: false,
    centerPadding: "20px",
    slidesToShow: renderNoOfSildes(),
    swipeToSlide: true,
  };

  return (
    <TimelineSection id="Schedule">
      <Heading>Schedule</Heading>

      <TabContainer>
        <Tab current={day} value={"day1"}>
          Day 1
        </Tab>
        <Tab current={day} value={"day2"}>
          Day 2
        </Tab>
        <Tab current={day} value={"day3"}>
          Day 3
        </Tab>
      </TabContainer>
      <ActionButton
        style={{
          marginLeft: "20px",
          width: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => window.open("https://minify.live/Devcon21Day3")}
      >
        Join on Youtube
        <div
          style={{
            width: "45px",
            paddingLeft: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FaYoutube size="large" style={{ width: "55px" }} />
        </div>
      </ActionButton>
      <Caraousal>
        {/* <BiLeftArrow className="prev-arr" /> */}
        <Slider {...settings} ref={slider}>
          <CardWrapper>
            <StartingCard>
              <div style={{ alignSelf: "center" }}>
                <h2 className="date-text">{data[day].start.date}</h2>
                <h2 className="day-description">{data[day].start.content}</h2>
              </div>
              <div className="icon">
                <AiOutlineRightCircle
                  onClick={() => {
                    slider?.current.slickGoTo(1);
                  }}
                />
              </div>
            </StartingCard>
          </CardWrapper>
          {data[day].timeline.map(
            ({ name, id, topic, time, image, description }, i) => (
              <CardWrapper key={i}>
                <TimelineCard key={i}>
                  <CardImg
                    src={image ? image : tempSpeaker}
                    alt="cardImg"
                    loading="eager"
                    className="card-img"
                  />
                  <CardSection>
                    <CardCircle />
                    <CardInfo>
                      <h4>{name}</h4>
                      <p>{id}</p>
                      <h2>{topic}</h2>
                      <h5>{time}</h5>
                    </CardInfo>
                  </CardSection>
                </TimelineCard>
                {/* <DummyCard>
                  <h2>{topic}</h2>

                  <p>{description ? description : dummyDescription}</p>
                </DummyCard> */}
              </CardWrapper>
            )
          )}
        </Slider>
      </Caraousal>
    </TimelineSection>
  );
};

export default Timeline;
