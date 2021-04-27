import React from "react";

import Layout from "../components/Layout/Layout";
import { IndexWrapper } from "../styles/index.styles";
import Hero from "../components/Hero/Hero";
import Timeline from "../components/Timeline/Timeline";
import About from "../components/About/About";
import DiscordBox from "../components/DiscordBox/DiscordBox";
import Footer from "../components/Footer/Footer";

const Index = () => {
  return (
    <Layout>
      <IndexWrapper>
        <Hero />
        <About />
        <Timeline />
        <DiscordBox />
        <Footer />
      </IndexWrapper>
    </Layout>
  );
};

export default Index;
