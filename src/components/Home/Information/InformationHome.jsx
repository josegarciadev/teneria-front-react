import React from "react";
//import styles from "../Header/Header.module.css";
import teneria from "./images/teneria.jpg";
import styles from "./Information.module.css";

const InformationHome = () => {
  return (
    <>
      
        <img
          src={teneria}
          alt=""
          className={`${styles.img_size} d-flex justify-content-center`}
        />

    </>
  );
};

export default InformationHome;
