import React from "react";
import ToTop from "./../toTop/ToTop";
import Header from "./../header/Header";
import HowCanWeHelp from "./../howcanwehelp/HowCanWeHelp";
import OurTeam from "./../ourTeam/OurTeam";
import BusinessInAzerbaijan from "./../BusinessInAzerbaijan/BusinessInAzerbaijan";
import Meqaleler from "./../Məqalələr/Meqaleler";
import StartCareer from "./../startCareer/StartCareer";
import ClientProjects from "./../ClientProjects/ClientProjects";
import ContactUs from "./../contactUs/ContactUs";
import Footer from "../footer/Footer";
const HomePage = ({width}) => {
  return (
    <>
      <ToTop/>
      <Header width={width} />
      <HowCanWeHelp />
      <OurTeam />
      <BusinessInAzerbaijan />
      <Meqaleler />
      <StartCareer />
      <ClientProjects />
      <ContactUs width={width} />
       <Footer width={width}/>
    </>
  );
};

export default HomePage;
