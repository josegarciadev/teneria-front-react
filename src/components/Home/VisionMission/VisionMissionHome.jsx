import React from "react";
import styles from "./VisionMission.module.css";

const VisionHome = () => {
  return (
    <>
      <div className={`${styles.content}`}>

         <h1 className={`${styles.titleOne} d-flex justify-content-center`}>
        Misión
        </h1>
        <p className={`${styles.mission} d-flex justify-content-center`}>
        Ser una empresa líder en la industria de pieles y reconocida socialmente.
        </p>

        <h1 className={`${styles.titleTwo} d-flex justify-content-center`}>
        Visión
        </h1>
        <p className={`${styles.vision} d-flex justify-content-center`}>
        Procesar y comercializar pieles de alta calidad que satisfagan las exigencias del mercado global.
        </p>

        {/*<h1 className={`${styles.titleFour} d-flex justify-content-center`}>
        Objetivo General
        </h1>
        <p className={`${styles.objective} d-flex justify-content-center`}>
        Procesar y comercializar pieles de alta calidad que satisfagan las exigencias del mercado global.
        </p> */}



      </div>
    </>
  );
};

export default VisionHome;