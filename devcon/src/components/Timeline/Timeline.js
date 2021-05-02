import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { AiOutlineRightCircle } from "react-icons/ai";
// import { BiLeftArrow } from "react-icons/bi";
// import { StaticImage } from "gatsby-plugin-image";
import tempSpeaker from "../../images/tempSpeaker.jpg";
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
  DummyCard,
} from "./Timeline.styles";
import speaker1 from "../../images/speaker-1.jpg";

// !! Add image property for the speaker images
const data = {
  day1: {
    timeline: [
      {
        name: "Vipul Srivastava",
        id: "SDE at Amazon",
        topic: "Importance of Data Structures for developers",
        time: "5pm-7pm",
        description: `This session is organized to put light on the fact that Data
        Structures and Algorithms are not only important for clearing
        interviews, but for developing problem solving skills too!`,
      },

      {
        name: "Shubham Rawat",
        id: "Software Engineering Intern @ Red Hat",
        topic: "Roadmap for Developers",
        time: "5pm-7pm",
        image: speaker1, // !! Example
        description: `This session is targeted towards beginners in the field of development. To have a well-structured path to follow to become a full stack web developer in 2021, attend this session!`,
      },

      {
        name: "Harpreet Kaur",
        id: "Global Product/Technical Program Leader",
        topic: "Learning out of the box",
        time: "5pm-7pm",
        description: `Cloud computing is an in-demand skill in the tech industry. Get a sneak peak into technologies like AWS, GCP, DevOps and Websockets through this session.`,
      },
    ],
    start: {
      date: "14th May 2021",
      content: "Day 1 is filled making your roots strong",
    },
  },
  day2: {
    timeline: [
      {
        name: "Jaskeerat singh randhawa",
        id: "postion @ Google",
        topic: "Exploring Machine Learning & Full Stack Development",
        time: "5pm-7pm",
        description: `This session is organized to put light on the fact that Data Structures and Algorithms are not only important for clearing interviews, but for developing problem solving skills too!`,
      },

      {
        name: "Jaskeerat singh randhawa",
        id: "postion @ Google",
        topic: "Design - Important aspect of Development",
        time: "5pm-7pm",
        description: `Most of the Front-end developers find their hand tight with designing skills. This session is targeted for those developers. To make this session more hands-on, it will end with a Design challenge.`,
      },

      {
        name: "Jaskeerat singh randhawa",
        id: "postion @ Google",
        topic: "Hands on with React",
        time: "5pm-7pm",
        description: `React as a frontend framework is on fire among many top notch companies. Day 2 has a session on “Getting Hands on with React”, where you’ll get insights into React and how you can make interactive Single Page Applications using React.`,
      },

      {
        name: "Jaskeerat singh randhawa",
        id: "postion @ Google",
        topic: "Beginning with the Backend Js",
        time: "5pm-7pm",
        description: `Vanilla Js is well known for its unforeseen behavior! But what is it more famous for? JavaScript is widely used language for Frontend and Backend. This session will help you get insights into JavaScript as a backend language.`,
      },
    ],
    start: {
      date: "15th May 2021",
      content: "Day2 is filled with connecting D's",
    },
  },
  day3: {
    timeline: [
      {
        name: "Jaskeerat singh randhawa",
        id: "postion @ Google",
        topic: "Learning about Azure",
        time: "5pm-7pm",
        description: `Cloud computing is an in-demand skill in the tech industry. Considering that, Day 3 will introduce you to Azure, accompanied by other interactive sessions. `,
      },

      {
        name: "Jaskeerat singh randhawa",
        id: "postion @ Google",
        topic: "Grow with Machine Learning",
        time: "5pm-7pm",
        description: `Machine Learning is on boom these days. There is so much new to explore when it comes to fields like ML and AI. This session is targeted for the students inspired to explore in this field and grow with Machine Learning!`,
      },

      {
        name: "Jaskeerat singh randhawa",
        id: "postion @ Google",
        topic: "Session on Personal Development",
        time: "5pm-7pm",
        description: `A pragmatic Programmer is more than someone who can just write code. Collaborating with the team to work on projects productively requires an efficient mindset and never-to-give-up attitude. `,
      },

    ],
    start: {
      date: "16th May 2021",
      content: "Day 3 is filled with Personal Development ",
    },
  },
};

const dummyDescription = `This session is organized to put light on the fact that Data
Structures and Algorithms are not only important for clearing
interviews, but for developing problem solving skills too!`;

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
          {data[day].timeline.map(
            ({ name, id, topic, time, image, description }, i) => (
              <CardWrapper key={i}>
                {/* <TimelineCard key={i}>
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
              </TimelineCard> */}
                <DummyCard>
                  <h2>{topic}</h2>

                  <p>{description ? description : dummyDescription}</p>
                </DummyCard>
              </CardWrapper>
            )
          )}
        </Slider>
      </Caraousal>
    </TimelineSection>
  );
};

export default Timeline;
