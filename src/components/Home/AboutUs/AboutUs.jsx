import React from "react";
import styles from "./AboutUs.module.css";
import burble from './images/burble.jpg'

const AboutUs = () => {
  return (
    <>
      <div className={`${styles.contenedor}`}>
        <img src={burble} />
        <div className={`${styles.encima} justify-content-start`}>Texto</div>
        <div className={`${styles.centrado} justify-content-center`}>Centrado</div>
      </div>
    </>
  );
};

export default AboutUs;
