import React from "react";
import styles from "./howhelp.module.css";
import helpBg from "../../assets/howHelp/how_help_image.png";

const HowCanWeHelp = () => {
  const businness = [
    "Daşınmaz Əmlak",
    "Enerji",
    "Maliyyə Servisləri",
    "Sənaye Məhsulları",
    "Texnologiya, Media və Əyləncə",
    "Transporstasiya və Logistika",
    "İstehsal",
    "Retail",
    "Təchizat",
    "Təhsil",
    "FMCG",
    "Tikinti",
    "E-commerce",
  ];

  return (
    <div className={`${styles.how_help_container}`}>
      <div className={`${styles.help_left}`}>
        <span>
          <h2>Sizə necə kömək edə bilərik?</h2>
          <p>Sizin biznes istiqamətiniz?</p>
        </span>
        <div className={`${styles.business}`}>
          {businness.map((b) => (
            <div className={`${styles.business_item}`}>{b}</div>
          ))}
        </div>
      </div>
      <div className={`${styles.help_right}`}>
        <img src={helpBg} alt="" />
      </div>
    </div>
  );
};

export default HowCanWeHelp;
