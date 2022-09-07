import React, { useEffect, useState } from "react";
import styles from "./toTop.module.css";
import toTopImage from "../../assets/toTop/toTop.svg";

const ToTop = () => {
  const [displayNone, setDisplay] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setDisplay(true);
      } else {
        setDisplay(false);
      }
    });
  }, []);

  return (
    <a
      href={"#top"}
      className={`${styles.toTopContainer}`}
      style={!displayNone ? { display: "none" } : null}
    >
      <img src={toTopImage} alt="" />
    </a>
  );
};

export default ToTop;
