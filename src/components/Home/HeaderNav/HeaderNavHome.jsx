import React from "react";
import styles from "./HeaderNav.module.css";
import logo from "./images/logo.png";

const HeaderNav = () => {
  return (
    <>
      <header class="sticky-top shadow">
        <nav
          className={`navbar navbar-expand-lg navbar-light ${styles.background_nav}`}
        >
          <img src={logo} alt="" className={`${styles.img_icon}`} />
          
          <a className="navbar-brand" href="/#teneria">
            Teneria Rubio C.A
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="/#AboutUs">
                ¿Quienes Somos? 
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#VisionMission">
                  Vision y Mision
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#objective">
                  Ojetivo General
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#products">
                 ¿Nuestros Productos?
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#contact">
                 Contacto
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#followUs">
                 Siguenos
                </a>
              </li>


              <li className={`${styles.login} nav-item`}>
                <a className="nav-link" href="/login">
                 Login
                </a>
              </li>
            
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderNav;
