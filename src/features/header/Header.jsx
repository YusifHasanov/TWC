import React, {useState} from "react";
import styles from "./header.module.css";
import TWCLogo from "../../assets/navi/twcLogo.svg";
import {useLocation, useNavigate} from "react-router-dom";
import TypewriterComponent from "typewriter-effect";
// Carousel Imports
import AliceCarousel from "react-alice-carousel";
import carousel1 from "../../assets/sideBat/carousel1.png";
import carousel2 from "../../assets/sideBat/carousel2.png";
import carousel3 from "../../assets/sideBat/carousel3.png";
import carousel4 from "../../assets/sideBat/carousel4.png";
import carousel5 from "../../assets/sideBat/carousel5.png";
import naviBg from "../../assets/navi/navi-bg.svg";
//React-icons Imports
import {ImFacebook, ImLinkedin2} from "react-icons/im";
import {BsInstagram} from "react-icons/bs";


const Header = ({width}) => {
    const location = useLocation();


    const navigate = useNavigate();
    const [translateX, setTranslateX] = useState(100);
    const [onClickSublistOne, setSubListOne] = useState(true);
    const typewriterString = location.pathname === "/" ?
        ["Azərbaycanda ilk yerli saf menecment konsaltinq servisləri",
            "The first pure local management consulting services in Azerbaijan ",] : null;
    const responsive = {
        0: {items: 1},
        568: {items: 2},
        1024: {items: 3},
    };

    const carouselItems = [
        <div className="item" data-value="1">
            <img src={carousel1} alt="" className={`${styles.carousel_image}`}/>
        </div>,
        <div className="item" data-value="2">
            <img src={carousel2} alt="" className={`${styles.carousel_image}`}/>
        </div>,
        <div className="item" data-value="3">
            <img src={carousel3} alt="" className={`${styles.carousel_image}`}/>
        </div>,
        <div className="item" data-value="4">
            <img src={carousel4} alt="" className={`${styles.carousel_image}`}/>
        </div>,
        <div className="item" data-value="5">
            <img src={carousel5} alt="" className={`${styles.carousel_image}`}/>
        </div>,
    ];


    return (
        <div className={`${styles.header_container}`}>
            <div className={`${styles.header_communication}`}>
                <div className={`${styles.number_link}`}>
                    <span className={`${styles.header_link}`}>info@twc.az</span>
                    {width > 1000 ? (
                        <span className={`${styles.header_number}`}>+994 50 447 10 90</span>
                    ) : null}
                </div>
                <div className={`${styles.socials}`}>
                    <span className={`${styles.header_linkedin}`}><ImLinkedin2/></span>
                    <span className={`${styles.header_facebook}`}><ImFacebook/></span>
                    <span className={`${styles.header_instagram}`}><BsInstagram/></span>
                </div>
            </div>
            <div className={`${styles.header_menu}`}>
                <div className={`${styles.menu_left}`}>
                    <img
                        src={TWCLogo}
                        className={`${styles.logo_image}`}
                        alt=""
                        onClick={() => {
                            navigate("/");
                        }}
                    />
                    {width > 1000 ? (
                        <ul className={`${styles.menu_list}`}>
                            <li>Sənaye</li>
                            <li>Xidmətlər</li>
                            <li>Məqalələr</li>
                            <li>Haqqımızda</li>
                            <li>Karyera</li>
                            <li>Əlaqə</li>
                        </ul>
                    ) : null}
                </div>
                <div className={`${styles.menu_right}`}>
                    {width > 1000 ? (
                        <button className={`${styles.daxil_ol}`}>
                            TWC CRM-ə daxil ol!
                        </button>
                    ) : null}
                    <div
                        className={`${styles.hamburger_container}`}
                        onClick={() => {
                            setTranslateX(0);
                        }}
                    >
                        <div className={`${styles.top}`}></div>
                        <div className={`${styles.center}`}></div>
                        <div className={`${styles.bottom}`}></div>
                    </div>
                </div>
            </div>
            <div className={`${styles.header_main}`}>
                <h1 className={`${styles.auto_write}`}>
                    <TypewriterComponent
                        options={{
                            strings: typewriterString,
                            autoStart: true,
                            delay: 75,
                            deleteSpeed: 90,
                            loop: true,

                            cursorClassName: `${styles.cursorSize}`,
                        }}
                    />
                </h1>
            </div>
            <div
                className={`${styles.sideBar}`}
                style={{transform: `translateX(${translateX}%`}}
            >
                <svg
                    className={`${styles.closeButton}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="21.92"
                    height="27.92"
                    viewBox="0 0 21.92 27.92"
                    onClick={() => {
                        setTranslateX(100);
                    }}
                >
                    <rect
                        width="30"
                        height="1"
                        transform="translate(0.707 6) rotate(45)"
                        fill="#fff"
                    />
                    <rect
                        width="30"
                        height="1"
                        transform="translate(0 21.213) rotate(-45)"
                        fill="#fff"
                    />
                </svg>
                <img
                    src={naviBg}
                    alt=""
                    style={translateX === 100 ? {display: "none"} : null}
                />
                {width > 768 ? (
                    <>
                        <p className={`${styles.sideBar_small_header}`}>
                            BİZNESİNİZİ TWC İLƏ YÜKSƏLDİN
                        </p>
                        <h2 className={`${styles.sideBar_big_header}`}>
                            Think Wise Consulting
                        </h2>
                        <p className={`${styles.sideBar_content}`}>
                            Peşəkar komandamızla TWC sizə uğurlu biznesinizi qurmağa və
                            inkişaf etdirməyə imkan verir.
                        </p>
                        <h2 className={`${styles.sideBar_bottom_header}`}>
                            Konsalting servislərimiz
                        </h2>
                        <AliceCarousel
                            mouseTracking
                            items={carouselItems}
                            responsive={responsive}
                            controlsStrategy="alternate"
                            disableDotsControls={true}
                            disableButtonsControls={true}
                            autoPlay={true}
                            autoPlayInterval={1000}
                            animationDuration={1000}
                            infinite={true}
                        />
                    </>
                ) : (
                    <>
                        <ul className={`${styles.sideBar_mobile_list}`}>
                            <li
                                className={`${styles.sideBar_mobile_list_item}`}
                                onClick={() => {
                                    setSubListOne(!onClickSublistOne);
                                }}
                            >
                                Sənaye
                            </li>
                            <>
                                <ul
                                    className={`${styles.sideBar_subList}`}
                                    style={onClickSublistOne ? {display: "none"} : null}
                                >
                                    <li className={`${styles.sublist_item}`}>
                                        <div className={`${styles.sublist_item_text}`}>
                                            Daşınmaz Əmlak
                                            <div
                                                className={`${styles.sideBar_subList_animation}`}
                                            ></div>
                                        </div>
                                    </li>
                                    <li className={`${styles.sublist_item}`}>
                                        <div className={`${styles.sublist_item_text}`}>
                                            Maliyyə Servisləri
                                            <div
                                                className={`${styles.sideBar_subList_animation}`}
                                            ></div>
                                        </div>
                                    </li>
                                    <li className={`${styles.sublist_item}`}>
                                        <div className={`${styles.sublist_item_text}`}>
                                            Retail
                                            <div
                                                className={`${styles.sideBar_subList_animation}`}
                                            ></div>
                                        </div>
                                    </li>
                                    <li className={`${styles.sublist_item}`}>
                                        <div className={`${styles.sublist_item_text}`}>
                                            Sənaye Məhsulları
                                            <div
                                                className={`${styles.sideBar_subList_animation}`}
                                            ></div>
                                        </div>
                                    </li>
                                    <li className={`${styles.sublist_item}`}>
                                        <div className={`${styles.sublist_item_text}`}>
                                            TEXNOLOGİYA, MEDİA VƏ ƏYLƏNCƏ
                                            <div
                                                className={`${styles.sideBar_subList_animation}`}
                                            ></div>
                                        </div>
                                    </li>
                                    <li className={`${styles.sublist_item}`}>
                                        <div className={`${styles.sublist_item_text}`}>
                                            TRANSPORTASİYA VƏ LOGİSTİKA
                                            <div
                                                className={`${styles.sideBar_subList_animation}`}
                                            ></div>
                                        </div>
                                    </li>
                                    <li className={`${styles.sublist_item}`}>Təhcizat</li>
                                    <li className={`${styles.sublist_item}`}>Fmcg</li>
                                    <li className={`${styles.sublist_item}`}>Tikinti</li>
                                    <li className={`${styles.sublist_item}`}>İstehsalat</li>
                                    <li className={`${styles.sublist_item}`}>Təhsil</li>
                                    <li className={`${styles.sublist_item}`}>E-ticarət</li>
                                    <li className={`${styles.sublist_item}`}>Enerji</li>
                                </ul>
                            </>
                            <li className={`${styles.sideBar_mobile_list_item}`}>
                                Xidmətlər
                            </li>
                            <li className={`${styles.sideBar_mobile_list_item}`}>
                                Məqalələr
                            </li>
                            <li className={`${styles.sideBar_mobile_list_item}`}>
                                Haqqımızda
                            </li>
                            <li className={`${styles.sideBar_mobile_list_item}`}>Karyera</li>
                            <li>Əlaqə</li>
                            <li>TWC crm-ə daxil ol</li>
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
