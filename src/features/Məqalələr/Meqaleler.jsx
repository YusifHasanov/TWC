import React from "react";
import styles from "./meqaleler.module.css";
import netflix from "./../../assets/meqaleler/netflix_bg.png";
import stratUp from "./../../assets/meqaleler/startup_bg.png";

const Meqaleler = () => {
  const meqaleler = [
    {
      id: 1,
      name: "NETFLIX",
      title: "Netflix biznes modelini necə dəyişdi",
      image: "https://www.twc.az/static/media/article-netflix.80328a2f.png",
      content:
        "1997-ci ildə bir DVD kirayə mağaza kimi işə başlayan Netflix, 2020-ci ilin sonundan etibarən, 190-dan çox ölkədə fəaliyyət göstərərkən 204 milyon istifadəçisi və 25 milyard ABŞ dolları gəliri olan ən böyük subscription-əsaslı kontent izləmə oyunçusudur. Şirkətin bu müddətə qədərki inkişaf strategiyasını 4 mərhələyə bölmək olar.",
      sections: [
        {
          id: 1,
          title:
            "“Hər-DVD icarəsi üçün ödəniş konsepsiyasından aylıq sabit ödənişli subscription-a keçid”",
          content:
            "Birinci mərhələdə, idarə heyəti, sürətli böyüyən e-ticarətə addım atmaq üçün DVD’lərin VHS lentləri ilə müayisədə inventarlaşdırma və göndərmə xərclərinin üstünlüyünü nəzərə alaraq Netflixi dünyanın ilk DVD kirayə mağazası olaraq qurdular. Daha sonra biznes modeli hər-icare-üçün-ödənişdən aylıq-sabit-ödənişli-subscription konsepsiyasına çevrildi və bu nəticədə Blockbuster üzərində rəqabət üstünlüyü (limitsiz kirayə, son tarixsiz kirayə, cəriməsiz gecikmə, eyni gündə çatdırılma və s.) ilə nəticələndi. 2002-ci ildəki IPO-dan (İlkin Kütləvi Təklif) sonra, şirkət hələ də mənfəətə çatmasada, təxminən 1 milyon aylıq abunəçiyə sahib idi.",
        },
        {
          id: 1,
          title:
            "“Online məhdudiyyətsiz kontent izləmənin industriyada inqilabı”",
          content:
            "İkinci mərhələdə, Netflix abunəçilərinə 2007-ci ildə fərdi kompüterlərdən anında məhdudiyyətsiz kontent izləmə imkanı təqdim edərək Media və Əyləncə industriasında inqilab etdi və 2019-cu ilin sonunda DVD seqmenti ümumi satışların 2%-dən azını təşkil etdi. Əlavə olaraq, Netflix-in strategiyası ABŞ-dan qonşu bazarlara genişlənmək idi. Demək olar ki, potensial bazarları ev-bazarına bənzər istifadəçi xüsusiyyətlərinə malik olanlara limitləmək məcburiyyətində qaldılar. Məsələn, coğrafi, iqtisadi və sosial-demoqrafik xüsusiyyətlərinə görə Kanadaya 2010-cu ildə daxil oldular.",
        },
      ],
    },
    {
      id: 2,
      name: "Startup",
      title: "Startup",
      image: "https://www.twc.az/static/media/article-startup.6875dab1.png",
      content: "",
      sections: [],
    },
  ];
  return (
    <div className={`${styles.meqaleler_container}`}>
      <h2>Meqaleler</h2>
      <div className={`${styles.meqaleler_box}`}>
        <div className={`${styles.left_container}`}>
          <div>
            <img className={`${styles.meqale_image}`} src={netflix} alt="" />
            <div className={`${styles.content_box}`}>
              <h3>NETFLIX | MƏQALƏ</h3>
              <p>Netflix biznes modelini necə dəyişdi...</p>
              <p>
                1997-ci ildə bir DVD kirayə mağaza kimi işə başlayan Netflix,
                2020-ci ilin sonundan etibarən, 190-dan çox ölkədə fəaliyyət
                göstərərkən 204 milyon istifadəçisi və 25 milyard ABŞ dolları
                gəliri olan ən böyük subscription-əsaslı kontent izləmə
                oyunçusudur.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.right_container}`}>
          <div>
            <img className={`${styles.meqale_image}`} src={stratUp} alt="" />
            <div className={`${styles.content_box}`}>
              <h3>STARTAP | MƏQALƏ</h3>
              <p>Azərbaycanın startap ekosisteminin çətinliyi hansılardır?</p>
              <p>
                TWC-də biz inanırıq ki, startap yaratmaq ən çətin, ancaq
                qurucuların karyeralarında özlərindən daha böyük bir şey yarada
                biləcəkləri ən vacib təşəbbüsdür.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className={`${styles.hamisina_bax}`}>Hamısına bax</button>
    </div>
  );
};

export default Meqaleler;
