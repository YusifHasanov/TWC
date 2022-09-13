import React, { useState } from "react";
import styles from "./header.module.css";
import TWCLogo from "../../assets/navi/twcLogo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import TypewriterComponent from "typewriter-effect";
// Carousel Imports
import AliceCarousel from "react-alice-carousel";
import carousel1 from "../../assets/sideBat/carousel1.png";
import carousel2 from "../../assets/sideBat/carousel2.png";
import carousel3 from "../../assets/sideBat/carousel3.png";
import carousel4 from "../../assets/sideBat/carousel4.png";
import carousel5 from "../../assets/sideBat/carousel5.png";
import naviBg from "../../assets/navi/navi-bg.svg";
//
const Header = ({ width }) => {
  const location = useLocation();
  console.log(location.pathname);

  const navigate = useNavigate();
  const [translateX, setTranslateX] = useState(100);
  const [onClickSublistOne, setSubListOne] = useState(true);
  const typewriterString = [
    "Azərbaycanda ilk yerli saf menecment konsaltinq servisləri",
    "The first pure local management consulting services in Azerbaijan ",
  ];
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const carouselItems = [
    <div className="item" data-value="1">
      <img src={carousel1} alt="" className={`${styles.carousel_image}`} />
    </div>,
    <div className="item" data-value="2">
      <img src={carousel2} alt="" className={`${styles.carousel_image}`} />
    </div>,
    <div className="item" data-value="3">
      <img src={carousel3} alt="" className={`${styles.carousel_image}`} />
    </div>,
    <div className="item" data-value="4">
      <img src={carousel4} alt="" className={`${styles.carousel_image}`} />
    </div>,
    <div className="item" data-value="5">
      <img src={carousel5} alt="" className={`${styles.carousel_image}`} />
    </div>,
  ];
  const HeaderLinkedin = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      version="1.1"
      viewBox="0 0 16 16"
      className="nav-header-text-white nav-icon-margin-right"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 6h2.767v1.418h0.040c0.385-0.691 1.327-1.418 2.732-1.418 2.921 0 3.461 1.818 3.461 4.183v4.817h-2.885v-4.27c0-1.018-0.021-2.329-1.5-2.329-1.502 0-1.732 1.109-1.732 2.255v4.344h-2.883v-9z"></path>
      <path d="M1 6h3v9h-3v-9z"></path>
      <path d="M4 3.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5z"></path>
    </svg>
  );
  const HeaderFacebook = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      version="1.1"
      viewBox="0 0 16 16"
      className="nav-header-text-white nav-icon-margin-right"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.5 3h2.5v-3h-2.5c-1.93 0-3.5 1.57-3.5 3.5v1.5h-2v3h2v8h3v-8h2.5l0.5-3h-3v-1.5c0-0.271 0.229-0.5 0.5-0.5z"></path>
    </svg>
  );
  const HeaderInstagram = (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="nav-header-text-white"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title></title>
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"></path>
    </svg>
  );

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
          <span className={`${styles.header_linkedin}`}>{HeaderLinkedin}</span>
          <span className={`${styles.header_facebook}`}>{HeaderFacebook}</span>
          <span className={`${styles.header_instagram}`}>
            {HeaderInstagram}
          </span>
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
              deleteSpeed:90,
              loop: true,
              
              cursorClassName: `${styles.cursorSize}`,
            }}
          />
        </h1>
      </div>
      <div
        className={`${styles.sideBar}`}
        style={{ transform: `translateX(${translateX}%` }}
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
          style={translateX === 100 ? { display: "none" } : null}
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
                  style={onClickSublistOne ? { display: "none" } : null}
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
