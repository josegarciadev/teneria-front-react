import React from "react";
import logo from "./images/logo.png";
import styles from "./Information.module.css";

const InformationHome = () => {
  return (
    <>
        <div class={`${styles.block} row align-items-center`}>
          <div className="col-2">
            <img
              src={logo}
              alt=""
              className={`${styles.logo_size} d-flex justify-content-center`}
            />
          </div>
          <div className="col-5">
            <h1 className={`${styles.title} m-auto text-center`}>¡LOS QUE NUNCA</h1>
            <h1 className={`${styles.subtitle} m-auto`}>SE DETIENEN!</h1>
          </div>
          <h1 className={`${styles.titleTwo} m-auto text-center`}>Comprometidos con Junin ❤</h1>
        </div>
    </>
  );
};

export default InformationHome;
