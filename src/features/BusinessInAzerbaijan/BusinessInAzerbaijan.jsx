import React from "react";
import styles from "./business.module.css";
import arrow from "./../../assets/businnessAzerbaijan/arrow-white.svg";
const BusinessInAzerbaijan = () => {
  return (
    <div className={`${styles.business_container}`}>
      <div className={`${styles.business_box}`}>
        <p>Doing Business in Azerbaijan</p>
        <div>
          <button className="relative rounded-tr">
            <img
              src={arrow}
              alt="rounded button inside arrow right icon"
              className={`${styles.arrow_icon}`}
            />
            <img
              src={arrow}
              alt="rounded button inside arrow right icon"
              className=""
              className={`${styles.arrow_icon_two}`}
            />
          </button>
          <span>Daha çox</span>
        </div>
      </div>
    </div>
  );
};

export default BusinessInAzerbaijan;
