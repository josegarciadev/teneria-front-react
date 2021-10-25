import React from "react";
import styles from "./Header.module.css";
import img1 from "./images/img1.jpg";
import logo from "./images/logo.png";
import ReactPlayer from "react-player";

const HeaderHome = () => {
  return (
    <>
      <header class="sticky-top shadow">
        <nav
          className={`navbar navbar-expand-lg navbar-light ${styles.background_nav}`}
        >
          <img src={logo} alt="" className={`${styles.img_icon}`} />
          <a className="navbar-brand" href="/">
            Navbar
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
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="/"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </header>

      <div className={`${styles.background} pb-5 pt-5`}>
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
