import { useState } from "react";

import styles from "./BeforeAfterSlider.module.css";

import beforeImage from "../../assets/images/comparison-before.webp";
import afterImage from "../../assets/images/comparison-after.webp";

function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);

  const handleChange = (event) => {
    setPosition(Number(event.target.value));
  };

  return (
    <div
      className={styles.slider}
      style={{ "--slider-position": `${position}%` }}
    >
      <img
        className={styles.image}
        src={beforeImage}
        alt="Стан шкіри до використання крему"
      />

      <div className={styles.afterLayer} aria-hidden="true">
        <img className={styles.image} src={afterImage} alt="" />
      </div>

      <div className={styles.divider} aria-hidden="true">
        <span className={styles.handle}>Ⅱ</span>
      </div>

      <input
        className={styles.range}
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={handleChange}
        aria-label="Порівняти стан шкіри до та після"
      />
    </div>
  );
}

export default BeforeAfterSlider;
