import React from "react";

import Layout from "../components/Layout/Layout";
import { IndexWrapper } from "../styles/index.styles";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";

const Index = () => {
  return (
    <Layout>
      <IndexWrapper>
        <Hero />
        <About />
      </IndexWrapper>
    </Layout>
  );
};

export default Index;
