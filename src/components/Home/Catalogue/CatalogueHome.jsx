import React from "react";
import styles from "./Catalogue.module.css";
import curt from "./images/curt.jpg";
import cuero1 from "./images/cuero1.jpg";
import cuero2 from "./images/cuero2.jpg";
import cuero3 from "./images/cuero3.jpg";
import cuero4 from "./images/cuero4.jpg";
import cuero5 from "./images/cuero5.jpg";
import cuero6 from "./images/cuero6.jpg";
import cuero7 from "./images/cuero7.jpeg";
import cuero8 from "./images/cuero8.jpg";
import cuero9 from "./images/cuero9.jpg";

const CatalogueHome = () => {
  return (
    <>
      <div className={`${styles.background}`}>
        <div className={`d-flex justify-content-center`}>
          <img src={curt} alt="" className="d-flex justify-content-center" />
        </div>

        <div class={`${styles.block} row align-items-center m-auto`}>
          <div className="col-6 m-auto">
            <h1 className={`${styles.title} m-auto text-center`}>
              ¡CONOCE NUESTROS PRODUCTOS!
            </h1>
          </div>
          <div className="col-6 m-auto">
            <h1 className={`${styles.subtitle} m-auto text-center`}>
              Pasión por el Cuero ❤
            </h1>
          </div>
        </div>

        <div className={`${styles.block_cards} row pt-4`}>
          <div className="col-4">
            <div className={`${styles.cardLeft} card`}>
              <img src={cuero1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lado Talco Lado Nappa Corinto:</h5>
                <p className="card-text">
                  Uso en marroquinería y calzado, es una piel de tipo graso, muy comercial, tiene gran demanda, ya que puede ser usada en la elaboración de gran variedad de artículos.
                </p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className={`${styles.cardCenter} card`}>
              <img src={cuero2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lado Nappa Corinto</h5>
                <p className="card-text">
                  Uso en calzado, es una piel totalmente pigmentada, semi lucida con un pequeño grabado, usada para la elaboración de calzado colegial y también puede ser usada en otro tipo de calzado.
                </p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className={`${styles.cardRight} card`}>
              <img src={cuero3} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lado Plus</h5>
                <p className="card-text">
                  Uso en calzado, es una piel pigmentada, de brillo medio, muy usada en la elaboración de zapatos para dama y calzado de tipo casual.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.block_cards} row pt-4`}>
          <div className="col-4">
            <div className={`${styles.cardLeft} card`}>
              <img src={cuero4} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lado Dublim</h5>
                <p className="card-text">
                  Uso en calzado, es una piel pigmentada, semi-brillante, muy usada en la elaboración de calzado para damas, caballeros y niños.
                </p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className={`${styles.cardCenter} card`}>
              <img src={cuero5} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lado Toledo</h5>
                <p className="card-text">
                  Uso en calzado y marroquinería, es una piel semi-pigmentada de alto brillo, tipo italiana con “look” natural.
                </p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className={`${styles.cardRight} card`}>
              <img src={cuero6} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lado Bailarina</h5>
                <p className="card-text">
                  Uso en marroquinería y calzado, es una piel pigmentada de textura muy suave, puede ser lucida u opaca.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.block_cards} row pt-4`}>
          <div className="col-4">
            <div className={`${styles.cardLeft} card`}>
              <img src={cuero7} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Grupón Burgos</h5>
                <p className="card-text">
                  Uso específicamente marroquinería, es un tipo de piel de calibre alto, su uso más frecuente es para la elaboración de cinturones y correas para caballero.
                </p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className={`${styles.cardCenter} card`}>
              <img src={cuero8} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Lado Dinastía</h5>
                <p className="card-text">
                  Uso en calzado y marroquinería, es un tipo de piel italiana, con un acabado muy natural, de brillo semi lucida.Es muy usada en la elaboración de calzado para caballero.
                </p>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className={`${styles.cardRight} card`}>
              <img src={cuero9} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogueHome;
