import React from "react";
import styles from "./Objectives.module.css";

const VisionHome = () => {
  return (
    <>
      <div className={`${styles.content}`} id="objective">
        <h1 className={`${styles.title} d-flex justify-content-center`}>
        Objetivo General
        </h1>
        <p className={`${styles.objective} d-flex justify-content-center`}>
        Procesar y comercializar pieles de alta calidad que satisfagan las exigencias del mercado global.
        </p>

      </div>
    </>
  );
};

export default VisionHome;