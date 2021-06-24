// import speakerx from "../images/speaker-1.jpg";
import speaker1 from "../images/speaker-1.jpeg";
import speaker2 from "../images/speaker2.jpeg";
import speaker3 from "../images/speaker3.jpeg";
import speaker4 from "../images/speaker4.jpeg";
import speaker5 from "../images/speaker5.jpeg";
import speaker6 from "../images/speaker6.jpeg";
import speaker7 from "../images/speaker7.jpeg";
import speaker8 from "../images/speaker8.jpeg";
import speaker9 from "../images/speaker9.jpeg";
import speaker10 from "../images/speaker10.jpeg";
import speaker11 from "../images/speaker11.jpeg";
import speaker12 from "../images/speaker12.jpeg";

// !! Add image property for the speaker images
export const data = {
  day1: {
    timeline: [
      {
        name: "Akhil Bharti",
        id: "Senior Software Engineer, Tezos India",
        topic: "Introduction to Tezos",
        time: "4:30pm",
        image: speaker12, // !! Example
        description: `This session is organized to put light on the fact that Data
              Structures and Algorithms are not only important for clearing
              interviews, but for developing problem solving skills too!`,
      },
      {
        name: "Abhishek Kumar",
        id: "GSoC Mentor at Jboss | Mentor Codeforcause | MLH-Fellow 21",
        topic: "Importance of Data Structures for developers",
        time: "6:00pm",
        image: speaker1, // !! Example
        description: `This session is organized to put light on the fact that Data
          Structures and Algorithms are not only important for clearing
          interviews, but for developing problem solving skills too!`,
      },
      {
        name: "Bart Farrell",
        id:
          "CNCF Ambassador I Data on Kubernetes Community I Audiovisual Production",
        topic: "Session on Personal Development",
        time: "7:00pm",
        image: speaker2, // !! Example
        description: `This session is targeted towards beginners in the field of development. To have a well-structured path to follow to become a full stack web developer in 2021, attend this session!`,
      },

      {
        name: "Shubhank Saxena",
        id: "LFX Mentee'21 | GSoC'21 | Full Stack @Habbit",
        topic: "Learning out of the box",
        image: speaker3,
        time: "8:00pm",
        description: `Cloud computing is an in-demand skill in the tech industry. Get a sneak peak into technologies like AWS, GCP, DevOps and Websockets through this session.`,
      },
    ],
    start: {
      date: "25th June 2021",
      content: "Day 1: Let's get started",
    },
  },
  day2: {
    timeline: [
      {
        name: "Code Sauce Community",
        id: "Community",
        topic: "Introduction to Open Source Projects",
        time: "4:00pm",
        image: speaker4,
        description: `We commonly find students jumbled with the decision: whether to learn Machine Learning or Full Stack Development while being in college. This insightful session will lend you knowledge about more than just that. Finally, you will be able to decide what is better for you at the moment, and how you can decide what to go with.`,
      },

      {
        name: "Utsav Aggarwal",
        id: "Data Scientist at Oracle",
        topic: "Exploring Machine Learning & Full Stack Development",
        time: "5:00pm",
        image: speaker5,
        description: `Most of the Front-end developers find their hand tight with designing skills. This session is targeted for those developers. To make this session more hands-on, it will end with a Design challenge.`,
      },

      {
        name: "Saud Bakhar",
        id: "Senior Product Designer at Pepper",
        topic: "Design - Important aspect of Development",
        time: "6:00pm",
        image: speaker6,
        description: `React as a frontend framework is on fire among many top notch companies. Day 2 has a session on “Getting Hands on with React”, where you’ll get insights into React and how you can make interactive Single Page Applications using React.`,
      },
      {
        name: "Shivam Veer Singh",
        id: "React Developer & Youtuber on CreativeJE",
        topic: "Getting hands on with React",
        time: "7:00pm",
        image: speaker7,
        description: `Vanilla Js is well known for its unforeseen behavior! But what is it more famous for? JavaScript is widely used language for Frontend and Backend. This session will help you get insights into JavaScript as a backend language.`,
      },
      {
        name: "Ricardo Devis Agullo",
        id: "Developer at Guestline",
        topic: "Backend with Js",
        time: "8:00pm",
        image: speaker8,
        description: `Vanilla Js is well known for its unforeseen behavior! But what is it more famous for? JavaScript is widely used language for Frontend and Backend. This session will help you get insights into JavaScript as a backend language.`,
      },
    ],
    start: {
      date: "26th June 2021",
      content: "Day2: Connecting D's of Design and Development",
    },
  },
  day3: {
    timeline: [
      {
        name: "Shubham Rawat",
        id: "Software Engineering Intern at RedHat",
        topic: "Roadmap for Developers",
        time: "5:00pm",
        image: speaker9,
        description: `Cloud computing is an in-demand skill in the tech industry. Considering that, Day 3 will introduce you to Azure, accompanied by other interactive sessions. `,
      },

      {
        name: "Priyanshi Kathuria",
        id:
          "Alexa Student Influencer ASI 3.0 | (α) Microsoft Learn Student Ambassador",
        topic: "Learning about Azure",
        image: speaker10,
        time: "6:00pm",
        description: `Machine Learning is on boom these days. There is so much new to explore when it comes to fields like ML and AI. This session is targeted for the students inspired to explore in this field and grow with Machine Learning!`,
      },

      {
        name: "Anant Aggarwal",
        id: "Data Scientist at Microsoft | Deep learning researcher",
        topic: "Grow with Machine Learning",
        image: speaker11,
        time: "7:00pm",
        description: `A pragmatic Programmer is more than someone who can just write code. Collaborating with the team to work on projects productively requires an efficient mindset and never-to-give-up attitude. `,
      },
    ],
    start: {
      date: "27th June 2021",
      content: "Day 3: Self assessment and personal development",
    },
  },
};
