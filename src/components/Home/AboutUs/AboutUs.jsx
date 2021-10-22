import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <div className={`${styles.content}`}>
        <h1 className={`${styles.titleOne} d-flex justify-content-center`}>
        ¿Quienes Somos?
        </h1>
        <p className={`${styles.texto} d-flex justify-content-center`}>
        TENERÍA RUBIO C.A , nace en Venezuela bajo la denominación de Tenería Tachira, quien se fue abriendo paso a la actividad por medio de técnicas rudimentarias en el año 1974. En una segunda etapa, luego de 10 años, ya se habían adquirido las tierras en donde se proyectaría una planta con tecnología europea, pero que se adaptara a los esquemas de trabajo propios de la región.
        </p>

        <h1 className={`${styles.titleTwo} d-flex justify-content-center`}>
        Misión
        </h1>
        <p className={`${styles.mission} d-flex justify-content-center`}>
        Ser una empresa líder en la industria de pieles y reconocida socialmente.
        </p>

        <h1 className={`${styles.titleThree} d-flex justify-content-center`}>
        Visión
        </h1>
        <p className={`${styles.vision} d-flex justify-content-center`}>
        Procesar y comercializar pieles de alta calidad que satisfagan las exigencias del mercado global.
        </p>

        <h1 className={`${styles.titleFour} d-flex justify-content-center`}>
        Objetivo General
        </h1>
        <p className={`${styles.objective} d-flex justify-content-center`}>
        Procesar y comercializar pieles de alta calidad que satisfagan las exigencias del mercado global.
        </p>



      </div>
    </>
  );
};

export default AboutUs;
