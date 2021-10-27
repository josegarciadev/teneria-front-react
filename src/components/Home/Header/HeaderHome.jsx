import React from "react";
import styles from "./Header.module.css";
//import img1 from "./images/img1.jpg";
import logo from "./images/logo.png";
import ReactPlayer from "react-player";

const HeaderHome = () => {
  return (
    <>
      <div className={`${styles.background} pb-5 pt-5`} id="teneria">
        <div className="row">
          <div className="col-7">
            <h1 className={`${styles.title} d-flex justify-content-center`}>
              Teneria Rubio
            </h1>
            <h1 className={`${styles.subtitle} d-flex justify-content-center text-center`}>
              Procesadora Industrial de Pieles

            </h1>
          </div>
          <div className="col-5">
            <div className={`${styles.player} d-flex justify-content-center`}>
            <ReactPlayer
              url="https://youtu.be/nIvHB_EbzEY"
              width="340px"
              height="300px"
              controls
            />
            </div>
            
            {/* <img src={img1} alt="" className={`${styles.img_size} d-flex justify-content-center`}/> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderHome;
