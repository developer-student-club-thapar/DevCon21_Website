import React from "react";

import Layout from "../components/Layout/Layout";
import { IndexWrapper } from "../styles/index.styles";
import Hero from "../components/Hero/Hero";
import Timeline from "../components/Timeline/Timeline";
const Index = () => {
  return (
    <Layout>
      <IndexWrapper>
        <Hero />
        <Timeline />
      </IndexWrapper>
    </Layout>
  );
};

export default Index;
