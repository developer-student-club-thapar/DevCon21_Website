import React, { useState } from "react";
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
} from "./Timeline.styles";
import Slider from "react-slick";
import { BiRightArrowCircle } from "react-icons/bi";
import { StaticImage } from "gatsby-plugin-image";

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

  const Tab = ({ current, value, children }) => (
    <TabButton selected={current === value} onClick={() => setDay(value)}>
      {children}
    </TabButton>
  );
  const settings = {
    arrows: false,
    infinite: false,
    centerPadding: "20px",
    slidesToShow: 3,
    swipeToSlide: true,
  };
  console.log(data[day].start.date);
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
          <div>
            <StartingCard>
              <div style={{ alignSelf: "center" }}>
                <h2
                  style={{
                    color: "#3DAAE8",
                    fontSize: "10px",
                  }}
                >
                  {data[day].start.date}
                </h2>
                <h2>{data[day].start.content}</h2>
                <div
                  style={{
                    fontSize: "15px",
                    textAlign: "right",
                  }}
                >
                  <BiRightArrowCircle />
                </div>
              </div>
            </StartingCard>
          </div>
          {data[day].timeline.map(({ name, id, topic, time }, i) => (
            <div>
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
                    <h4 style={{ margin: "0px" }}>{name}</h4>
                    <p style={{ color: "#737373", margin: "0px" }}>{id}</p>
                    <h2>{topic}</h2>
                    <h5 style={{ margin: "0px" }}>{time}</h5>
                  </CardInfo>
                </CardSection>
              </TimelineCard>
            </div>
          ))}
        </Slider>
      </Caraousal>
    </TimelineSection>
  );
};

export default Timeline;
