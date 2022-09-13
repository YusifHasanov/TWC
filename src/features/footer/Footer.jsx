import React from "react";
import styles from "./footer.module.css";

const Footer = () => {

    const footerData = [
        {
            id: 1,
            title: "ÜNVAN",
            content: [
                "Nobel prospekti 15", "Azure Biznes Mərkəzi", "Mərtəbə 17, Otaq 118"
            ]
        },
        {
            id: 2,
            title: "ŞİRKƏT",
            content: [
                "Haqqımızda", "Məxfilik siyasəti", "FAQ"
            ]

        },
        {
            id: 3,
            title: "SOSİAL ŞƏBƏKƏ   ",
            content: [
                "Linkedin", "Facebook", "Instagram"
            ]
        },
        {
            id: 3,
            title: "Əlaqə",
            content: [
                "info@twc.az", "tel+994 50 447 10 90", "+994 12 488 68 19"
            ]
        }

    ];

    return <div className={`${styles.footer_container}`}>
        <div className={`${styles.footer_content}`}>
            <div className={`${styles.footer_top}`}>
                <h2>Uğura gedən <br/>yolda TWC ilə</h2>
            </div>
            <div className={`${styles.footer_bottom}`}>
                {
                    footerData.map((data=>(
                        <div className={`${styles.footer_item}`}>
                            <p className={`${styles.footer_title}`}>{data.title}</p>
                            <ul className={`${styles.footer_list}`}>
                                {data.content.map((c)=>(
                                    <li className={`${styles.footer_listItem}`}>{c}</li>
                                ))}
                            </ul>
                        </div>
                    )))
                }

            </div>
                <p className={`${styles.footer_end}`}>© 2022 Copy Think Wise Consulting MMC &amp;&amp; Designed by Yusif Hasanov</p>
        </div>
        <p></p>
    </div>;
};

export default Footer;
