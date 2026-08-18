import { useEffect, useRef, useState } from "react";
import styles from "./ComparisonSection.module.css";

import BeforeAfterSlider from "../BeforeAfterSlider/BeforeAfterSlider";

import topLeaves from "../../assets/images/hero-leaves-top-left.webp";
import comparisonLeaf from "../../assets/images/comparison-leaf.webp";

function ComparisonSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.isVisible : ""}`}
      aria-labelledby="comparison-title"
    >
      <img
        className={styles.topLeaves}
        src={topLeaves}
        alt=""
        aria-hidden="true"
      />

      <h2 id="comparison-title" className={styles.title}>
        Помічаєш перші ознаки вікових змін?
      </h2>

      <div className={styles.layout}>
        <div className={styles.cards}>
          <div className={styles.issueCardWrapper}>
            <p className={styles.issueCard}>
              Зниження пружності, поява тонких ліній, сухість і відчуття
              стягнутості можуть робити обличчя більш втомленим і тьмяним на
              вигляд.
            </p>

            <span className={styles.sadBadge} aria-hidden="true">
              😔
            </span>
          </div>

          <div className={styles.benefitCardWrapper}>
            <span className={styles.sparkleBadge} aria-hidden="true">
              ✨
            </span>

            <p className={styles.benefitCard}>
              Peptide-Tox Bor Cream допомагає підтримувати комфортний стан шкіри
              та дарує їй комплексний догляд. Насичена формула з 5 видами
              пептидів і комплексом керамідів сприяє більш гладенькому й
              пружному вигляду, підтримує оптимальний рівень зволоження та
              допомагає зберігати гідроліпідний баланс. Обличчя виглядає більш
              свіжим, відпочилим і доглянутим.
            </p>
          </div>
        </div>

        <div className={styles.sliderWrapper}>
          <BeforeAfterSlider />
        </div>

        <img
          className={styles.bottomLeaf}
          src={comparisonLeaf}
          alt=""
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

export default ComparisonSection;
