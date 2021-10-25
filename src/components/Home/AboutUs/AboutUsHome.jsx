import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <div className={`${styles.content}`}>
        <h1 className={`${styles.title} d-flex justify-content-center`}>
        ¿Quienes Somos?
        </h1>
        <p className={`${styles.texto} d-flex justify-content-center`}>
        TENERÍA RUBIO C.A , nace en Venezuela bajo la denominación de Tenería Tachira, quien se fue abriendo paso a la actividad por medio de técnicas rudimentarias en el año 1974. En una segunda etapa, luego de 10 años, ya se habían adquirido las tierras en donde se proyectaría una planta con tecnología europea, pero que se adaptara a los esquemas de trabajo propios de la región.
        </p>
      </div>
    </>
  );
};

export default AboutUs;
