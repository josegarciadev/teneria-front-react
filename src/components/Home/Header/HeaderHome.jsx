import React from "react";
import styles from "./Header.module.css";
import img1 from './images/img1.jpg';
import logo from './images/logo.png'

const HeaderHome = () => {
  return (
    <>
      <nav class={`navbar navbar-expand-lg navbar-light ${styles.background_nav}`}>
          <img src={logo} alt="" class={`${styles.img_icon}`}/>
        <a class="navbar-brand" href="#">
           Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div class={`${styles.background}`}>
        <div class="row">
          <div class="col-7">
              <h1 class={`${styles.title} d-flex justify-content-center`}>Teneria Rubio</h1>
              <h1 class={`${styles.subtitle} d-flex justify-content-center`}>¡LOS QUE NUNCA SE DETIENEN!</h1>
            {/* <img src={back} alt="" class={`${styles.img_size}`}/> */}
          </div>
          <div class="col-5">
              <img src={img1} alt="" class={`${styles.img_size} d-flex justify-content-center`}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderHome;
