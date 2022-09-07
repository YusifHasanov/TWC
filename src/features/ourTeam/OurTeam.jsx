import React from "react";
import styles from "./ourTeam.module.css";
import AliceCarousel from "react-alice-carousel";
import team_aynur from "../../assets/ourTeam/team_aynur.png";
import team_chingiz from "../../assets/ourTeam/team_chingiz.png";
import team_mehemmed from "../../assets/ourTeam/team_mehemmed.png";
import team_question from "../../assets/ourTeam/team_question.png";
import team_ramazan from "../../assets/ourTeam/team_ramazan.png";
import "./alice.css";
const OurTeam = () => {
  const carouselItems = [
    <div className={`${styles.carousel_item}`}>
      <div>
        <img className={`${styles.carousel_image}`} src={team_aynur} alt="" />
      </div>
      <h2>Aynur Nizamova</h2>
      <p>Biznes Konsultant</p>
      <p>Azərbaycan Dövlət İqtisad Universiteti, Dünya İqtisadiyyatı</p>
    </div>,
    <div className={`${styles.carousel_item}`}>
      <div>
        <img className={`${styles.carousel_image}`} src={team_chingiz} alt="" />
      </div>
      <h2>Çingiz Novruzzadə</h2>
      <p>Təsisçi və Direktor</p>
      <p>
        İUBH International Management və Univeristy of East Anglia Investment
        and Financial Management
      </p>
    </div>,
    <div className={`${styles.carousel_item}`}>
      <div>
        <img
          className={`${styles.carousel_image}`}
          src={team_mehemmed}
          alt=""
        />
      </div>
      <h2>Məhəmməd Şıxıyev</h2>
      <p>Aparıcı Data Analitik</p>
      <p> French-Azerbaijani University, BS Geoscience</p>
    </div>,
    <div className={`${styles.carousel_item}`}>
      <div>
        <img
          className={`${styles.carousel_image}`}
          src={team_question}
          alt=""
        />
      </div>
      <h2>Elnur Şabanov</h2>
      <p>Aparıcı Biznes Konsultant</p>
      <p>
        Azərbaycan Dövlət İqtisad Universiteti, Beynəlxalq Ticarət və Kommersiya
      </p>
    </div>,
    <div className={`${styles.carousel_item}`}>
      <div>
        <img className={`${styles.carousel_image}`} src={team_ramazan} alt="" />
      </div>
      <h2>Ramazan Əliquliyev</h2>
      <p>Satış və Marketinq</p>
      <p>
        Saint Petersburg, Polytechnic University, Digital Marketing and
        E-Commerce
      </p>
    </div>,
  ];
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };
  return (
    <div className={`${styles.team_container}`}>
      <h2 className={`${styles.ourTeam_header}`}>Peşəkar komandamız</h2>

      <AliceCarousel
        className={"aliceCarousel"}
        mouseTracking
        items={carouselItems}
        responsive={responsive}
        autoPlay={true}
        disableButtonsControls={true}
        infinite={true}
        animationDuration={1000}
        autoPlayInterval={1000}
      />
      <button className={`${styles.team_button}`}>Hamısına bax</button>
    </div>
  );
};

export default OurTeam;
