import React from "react";

import Layout from "../components/Layout/Layout";
import { IndexWrapper } from "../styles/index.styles";
import Hero from "../components/Hero/Hero";
import Timeline from "../components/Timeline/Timeline";
import About from "../components/About/About";
import DiscordBox from "../components/DiscordBox/DiscordBox";
import Footer from "../components/Footer/Footer";
import Sponsors from "../components/Sponsors/Sponsors";
import Modal from "../components/Modal/Modal";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const Index = () => {
  return (
    <Layout>
      <IndexWrapper>
        <Hero />
        <About />
        <Timeline />
        <Sponsors />
        <DiscordBox />
        <Footer />
      </IndexWrapper>
      <Modal>
        <RegisterForm />
      </Modal>
    </Layout>
  );
};

export default Index;
