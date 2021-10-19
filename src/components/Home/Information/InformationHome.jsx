import React from "react";
//import styles from "../Header/Header.module.css";
import teneria from "./images/teneria.jpg";
import styles from "./Information.module.css";

const InformationHome = () => {
  return (
    <>
      <div class={`${styles.background}`}>
        <img
          src={teneria}
          alt=""
          class={`${styles.img_size} d-flex justify-content-center`}
        />
      </div>
    </>
  );
};

export default InformationHome;
