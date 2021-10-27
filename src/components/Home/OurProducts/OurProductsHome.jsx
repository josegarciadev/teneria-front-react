import React from "react";
import styles from "./OurProducts.module.css";
import cueros from "./images/cueros.jpg";

const OurProducts = () => {
  return (
    <>
      <div className={`${styles.container}`} id="products">
        <div className={`${styles.content} d-flex justify-content-center`}>
          <div class={`${styles.block} row align-items-center`}>
            <div className="col-5">
              <h1 className={`${styles.titleOne} m-auto text-center`}>¿Te interesan</h1>
              <h1 className={`${styles.titleTwo} m-auto text-center`}>nuestros productos?</h1>
              <h1 className={`${styles.text} m-auto text-justify`}>Nuestros productos se realizan pensando en la necesidad y gusto del mercado, como también cumpliendo estrictamente con los parámetros de calidad internacionales para cada uno de los artículos producidos.</h1>
              <a type="button" href="/catalogue" className={`${styles.btn} btn`}> Comenzar </a>
            </div>
            <div className="col-7">
              <img
                src={cueros}
                alt=""
                className={`${styles.products} d-flex justify-content-center rounded-circle`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProducts;
