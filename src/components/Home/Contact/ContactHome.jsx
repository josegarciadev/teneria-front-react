import React from "react";
import styles from "./Contact.module.css";
import logo1 from "./images/logo1.png";
import qr from "./images/qr.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare, faTwitterSquare, faInstagramSquare
} from '@fortawesome/free-brands-svg-icons'

const ContactHome = () => {
  return (
    <>
      <div className={`${styles.background} pt-5`}>
        <div className="row">
          <div className="col-4">
            <img src={logo1} alt="" className={`${styles.logo}`} />
          </div>
          <div className="col-4">
            <h1 className={`${styles.title} d-flex justify-content-center`}>
              Contáctanos
            </h1>
            <h1 className={`${styles.subtitle} d-flex justify-content-center`}>
              Oficinas Tenería Rubio
            </h1>
            <p className={`${styles.data} d-flex justify-content-center`}>
              0276-7622055 Ext-317 / 0276-7620555
            </p>
            <h1 className={`${styles.subtitle} d-flex justify-content-center`}>
              Correo Electronico
            </h1>
            <p className={`${styles.data} d-flex justify-content-center`}>
              teneriarubioca@gmail.com
            </p>
          </div>
          <div className="col-4">
            <div className={` d-flex justify-content-center`}>
              <h1 className={`${styles.social} d-flex justify-content-center`}>
                Síguenos en Redes
              </h1>
            </div>
            <div className={`${styles.icons} d-flex justify-content-center`}>
              <a href="https://www.facebook.com/teneria.rubio" className={`${styles.facebook}`}><FontAwesomeIcon
                icon={faFacebookSquare}
                style={{ height: 40, width: 40, color:"black" }}
              /></a>
              <a href="https://www.instagram.com/teneria_rubioca"><FontAwesomeIcon
                icon={faInstagramSquare}
                style={{ height: 40, width: 40, color:"black" }}
              /></a>
              <a href="https://twitter.com/eventos_tenerub" className={`${styles.twitter}`}><FontAwesomeIcon
                icon={faTwitterSquare}
                style={{ height: 40, width: 40, color:"black" }}
                className={`${styles.twitter}`}
              /></a>
            </div>

            <div className={`${styles.qr} d-flex justify-content-center`}>
                <img src={qr} alt="" />
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <p className={`${styles.footer}`}>Teneria Rubio 2021 | Rubio, Estado Tachira - Venezuela</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactHome;
