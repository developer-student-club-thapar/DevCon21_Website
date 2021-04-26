import React, { useState } from "react";
import Slider from "react-slick";
import { AiOutlineRightCircle } from "react-icons/ai";
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
      date: "14 th may 2021",
      content: "Day 1 is filled with fun activities ",
    },
  },
  day2: {
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
      date: "15 th may 2021",
      content: "Day2 is filled with fun activities",
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
      content: "Day 3 is filled with fun activities ",
    },
  },
};

const Timeline = () => {
  const [day, setDay] = useState("day1");
  const breakpoints = useBreakpoint();

  const renderNoOfSildes = () => {
    if (breakpoints.xs) {
      return 1;
    } else if (breakpoints.sm) {
      return 1;
    } else if (breakpoints.md) {
      return 2;
    } else if (breakpoints.l || breakpoints.xl) {
      return 2;
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
    <TimelineSection id="Timeline">
      <Heading>Timeline</Heading>
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
        <Slider {...settings}>
          <CardWrapper>
            <StartingCard>
              <div style={{ alignSelf: "center" }}>
                <h2 className="date-text">{data[day].start.date}</h2>
                <h2 className="day-description">{data[day].start.content}</h2>
              </div>
              <div className="icon">
                <AiOutlineRightCircle />
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
