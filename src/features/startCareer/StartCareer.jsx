import React from "react";
import styles from "./career.module.css";
import notebook from "./../../assets/startCareer/notebook.jpg";
import leftArrow from "./../../assets/startCareer/leftArrow.svg";
const StartCareer = () => {
  return (
    <div className={`${styles.start_career_container}`}>
      <img className={`${styles.career_image}`} src={notebook} alt="" />

      <div className={`${styles.career_text_box}`}>
        <h3>Karyeranıza bizimlə başlayın</h3>
        <p>
          TWC-də məqsədimizin yeganə sütunu bizim <div></div> insanlarımızdır.
          Bizim dinamik mühitdə siz komanda <div></div> tərəfindən ilk gündən
          dəstək görməyinizə baxmayaraq,<div></div> siz öz yolunuzu müəyyən
          edəcəksiniz.
        </p>
        <div className={`${styles.more}`}>
          <button>
            <img src={leftArrow} alt="" />
          </button>
          <span>Daha çox</span>
        </div>
      </div>
    </div>
  );
};

export default StartCareer;
