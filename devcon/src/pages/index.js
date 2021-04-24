import React from "react";

import Layout from "../components/Layout/Layout";
import { IndexWrapper } from "../styles/index.styles";
import Hero from "../components/Hero/Hero";

const Index = () => {
  return (
    <Layout>
      <IndexWrapper>
        <Hero />
      </IndexWrapper>
    </Layout>
  );
};

export default Index;
