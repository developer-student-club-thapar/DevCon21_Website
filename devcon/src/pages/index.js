import React from "react";

import Layout from "../components/Layout/Layout";
import { IndexWrapper } from "../styles/index.styles";
import Hero from "../components/Hero/Hero";
import AboutPage from '../components/About/About';

const Index = () => {
  return (
    <Layout>
      <IndexWrapper>
        <Hero />
        <AboutPage />
      </IndexWrapper>
    </Layout>
  );
};

export default Index;
