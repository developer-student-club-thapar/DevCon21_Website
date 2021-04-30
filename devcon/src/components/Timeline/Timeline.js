import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { AiOutlineRightCircle } from "react-icons/ai";
// import { BiLeftArrow } from "react-icons/bi";
import { StaticImage } from "gatsby-plugin-image";
import { useBreakpoint } from "gatsby-plugin-breakpoints";

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
} from "./Timeline.styles";

const data = {
  day1: {
    timeline: [
      {
        name: "Vipul Srivastava",
        id: "SDE at Amazon",
        topic: "Importance of Data Structures for developers",
        time: "5pm-7pm",
      },

      {
        name: "Shubham Rawat",
        id: "Software Engineering Intern @ Red Hat",
        topic: "Roadmap for Developers",
        time: "5pm-7pm",
      },

      {
        name: "Harpreet Kaur",
        id: "Global Product/Technical Program Leader",
        topic: "Learning out of the box",
        time: "5pm-7pm",
      },
    ],
    start: {
      date: "14th may 2021",
      content: "Day 1 is filled making your roots strong",
    },
  },
  day2: {
    timeline: [
      {
        name: "Jaskeerat singh randhawa",
        id: "postion @ Google",
        topic: "Choose your path between Full Stack and Machine Learning",
        time: "5pm-7pm",
      },

      {
        name: "Jaskeerat singh randhawa",
        id: "postion @ Google",
        topic: "Why Design is Important for Development",
        time: "5pm-7pm",
      },

      {
        name: "Jaskeerat singh randhawa",
        id: "postion @ Google",
        topic: "Building a UI Live",
        time: "5pm-7pm",
      },

      {
        name: "Jaskeerat singh randhawa",
        id: "postion @ Google",
        topic: "Cloning app with React",
        time: "5pm-7pm",
      },
    ],
    start: {
      date: "15th may 2021",
      content: "Day2 is filled with connecting D's",
    },
  },
  day3: {
    timeline: [
      {
        name: "Jaskeerat singh randhawa",
        id: "postion @ Google",
        topic: "Importance of Data Structures for developers",
        time: "5pm-7pm",
      },

      {
        name: "Jaskeerat singh randhawa",
        id: "postion @ Google",
        topic: "Importance of Data Structures for developers",
        time: "5pm-7pm",
      },

      {
        name: "Jaskeerat singh randhawa",
        id: "postion @ Google",
        topic: "Importance of Data Structures for developers",
        time: "5pm-7pm",
      },

      {
        name: "Jaskeerat singh randhawa",
        id: "postion @ Google",
        topic: "Importance of Data Structures for developers",
        time: "5pm-7pm",
      },

      {
        name: "Jaskeerat singh randhawa",
        id: "postion @ Google",
        topic: "Importance of Data Structures for developers",
        time: "5pm-7pm",
      },
    ],
    start: {
      date: "16th may 2021",
      content: "Day 3 is filled with Personal Development ",
    },
  },
};

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
          {data[day].timeline.map(({ name, id, topic, time }, i) => (
            <CardWrapper key={i}>
              <TimelineCard key={i}>
                <CardImg>
                  <StaticImage
                    src="../../images/tempSpeaker.jpg"
                    alt="cardImg"
                    loading="eager"
                    imgClassName="card-img"
                    className="card-img-container"
                  />
                </CardImg>
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
            </CardWrapper>
          ))}
        </Slider>
      </Caraousal>
    </TimelineSection>
  );
};

export default Timeline;
