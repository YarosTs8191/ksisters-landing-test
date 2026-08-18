import styles from "./HeroSection.module.css";

import heroBackgroundDesktop from "../../assets/images/hero-background-desktop.webp";
import heroBackgroundMobile from "../../assets/images/hero-background-mobile.webp";
import heroProduct from "../../assets/images/hero-product.webp";
import leavesTopLeft from "../../assets/images/hero-leaves-top-left.webp";
import leavesBottomRight from "../../assets/images/hero-leaves-bottom-right.webp";
import heroBallsMobile from "../../assets/images/hero-balls-mobile.webp";
import heroBallsDesktop from "../../assets/images/hero-balls-desktop.webp";
import { useRef } from "react";

function HeroSection() {
  const heroRef = useRef(null);

  const handlePointerMove = (event) => {
    if (event.pointerType !== "mouse") return;

    const hero = heroRef.current;
    const rect = hero.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    hero.style.setProperty("--parallax-x", `${x * 80}px`);
    hero.style.setProperty("--parallax-y", `${y * 70}px`);
  };

  const handlePointerLeave = () => {
    heroRef.current?.style.setProperty("--parallax-x", "0px");
    heroRef.current?.style.setProperty("--parallax-y", "0px");
  };
  return (
    <section
      ref={heroRef}
      className={styles.hero}
      aria-labelledby="hero-title"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className={styles.content}>
        <img className={styles.leavesTopLeft} src={leavesTopLeft} alt="" />
        <p className={styles.eyebrow}>КОРЕЙСЬКА КОСМЕТИКА | 100% ОРИГІНАЛ</p>

        <h1 id="hero-title" className={styles.title}>
          Ліфтинг-крем для обличчя Peptide Tox Bor Cream — для пружної та
          гладенької шкіри.
        </h1>

        <p className={styles.description}>
          Допомагає розгладити видимість зморшок і підтримує оптимальний
          гідроліпідний баланс. Шкіра виглядає більш гладенькою, зволоженою та
          доглянутою вже після перших етапів догляду.
        </p>

        <button className={styles.button} type="button">
          ДОДАТИ ДО КОШИКА
        </button>
      </div>

      <div className={styles.visual} aria-hidden="true">
        <picture className={styles.background}>
          <source media="(min-width: 768px)" srcSet={heroBackgroundDesktop} />
          <img src={heroBackgroundMobile} alt="" />
        </picture>

        <img className={styles.product} src={heroProduct} alt="" />
        <picture className={styles.parallaxLayer}>
          <source media="(min-width: 768px)" srcSet={heroBallsDesktop} />
          <img src={heroBallsMobile} alt="" />
        </picture>
        <img
          className={styles.leavesBottomRight}
          src={leavesBottomRight}
          alt=""
        />
      </div>
    </section>
  );
}

export default HeroSection;
