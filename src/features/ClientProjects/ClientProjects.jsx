import React from "react";
import styles from "./clientProjects.module.css";
import AliceCarousel from "react-alice-carousel";
import prestijKimya from "./../../assets/clientProjects/Prestij-kimya.png";
import bakiAbadliq from "./../../assets/clientProjects/baki-abadliq.png";
import azMinerals from "./../../assets/clientProjects/azMinerals.png";
import elBor from "./../../assets/clientProjects/elbor.png";
import imaEnergy from "./../../assets/clientProjects/imaErgency.png";
import mansard from "./../../assets/clientProjects/mansard.png";
import oilSupply from "./../../assets/clientProjects/Oil-Supply.png";
import tuv from "./../../assets/clientProjects/tuv.png";
import vipex from "./../../assets/clientProjects/vipex.png";
import demirchi from "./../../assets/clientProjects/demirchi.png";
import abseronSerab from "./../../assets/clientProjects/abseronSerab.png";
const ClientProjects = () => {
  const carouselItems = [
    <div className={`${styles.carouselItem}`}>
      <span>
        <img src={prestijKimya} alt="" />
      </span>
    </div>,
    <div className={`${styles.carouselItem}`}>
      <span>
        <img src={bakiAbadliq} alt="" />
      </span>
    </div>,
    <div className={`${styles.carouselItem}`}>
      <span>
        <img src={azMinerals} alt="" />
      </span>
    </div>,
    <div className={`${styles.carouselItem}`}>
      <span>
        <img src={elBor} alt="" />
      </span>
    </div>,
    <div className={`${styles.carouselItem}`}>
      <span>
        <img src={imaEnergy} alt="" />
      </span>
    </div>,
    <div className={`${styles.carouselItem}`}>
      <span>
        <img src={mansard} alt="" />
      </span>
    </div>,
    <div className={`${styles.carouselItem}`}>
      <span>
        <img src={oilSupply} alt="" />
      </span>
    </div>,
    <div className={`${styles.carouselItem}`}>
      <span>
        <img src={tuv} alt="" />
      </span>
    </div>,
    <div className={`${styles.carouselItem}`}>
      <span>
        <img src={vipex} alt="" />
      </span>
    </div>,
    <div className={`${styles.carouselItem}`}>
      <span>
        <img src={demirchi} alt="" />
      </span>
    </div>,
    <div className={`${styles.carouselItem}`}>
      <span>
        <img src={abseronSerab} alt="" />
      </span>
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  return (
    <div className={`${styles.clientProjects_container}`}>
      <p>PORTFOLİO</p>
      <h2>Müştəri layihələrimiz</h2>
      <div className={`${styles.client_carousel_container}`}>
        <AliceCarousel
          className={"aliceCarousel"}
          mouseTracking
          items={carouselItems}
          responsive={responsive}
          autoPlay={true}
          disableButtonsControls={true}
          infinite={true}
          animationDuration={2000}
          autoPlayInterval={1000}
        
        />
      </div>
      <button className={`${styles.more_button}`}>Hamısına bax</button>
    </div>
  );
};

export default ClientProjects;
