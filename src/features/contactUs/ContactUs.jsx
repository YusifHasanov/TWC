import React from "react";
import styles from "./contactUs.module.css";

const ContactUs = () => {
  return (
    <div className={`${styles.contactUs_container}`}>
      <h2>
        Biz sizə biznesinizin inkişafında kömək etmək və suallarınızı
        cavablandırmaq üçün buradayıq.
      </h2>
      <div className={`${styles.form_container}`}>
        <div>
          <h3>Bizimlə əlaqə saxlayın və ya ofisimizə yaxınlaşın</h3>
          <input
            type={"text"}
            name={"text"}
            placeholder={"email"}
            required=""
          />
          <button>Əlaqə</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
