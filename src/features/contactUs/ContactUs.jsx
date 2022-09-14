import React from "react";
import styles from "./contactUs.module.css";
import {Button} from "@chakra-ui/react";

const ContactUs = ({width}) => {
    return (
        <div className={`${styles.contactUs_container}`}>
            <h2>
                Biz sizə biznesinizin inkişafında kömək etmək və suallarınızı
                cavablandırmaq üçün buradayıq.
            </h2>
            <div className={`${styles.form_container}`}>
                <div className={`${styles.form_content}`}>

                    <div>
                  <h3>{width<550?("Bizimlə əlaqə saxlayın"):("Bizimlə əlaqə saxlayın və ya ofisimizə yaxınlaşın")}</h3>
                        <input
                            type={"text"}
                            name={"text"}
                            placeholder={"email"}
                            required=""
                            className={`${styles.contactUs_input}`}
                        />
                    </div>

                    <Button>Əlaqə</Button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
