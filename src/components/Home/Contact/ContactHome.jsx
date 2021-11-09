import React from "react";
import styles from "./Contact.module.css";
import logo1 from "./images/logo1.png";
import cueros from "./images/cueros.jpg";

const ContactHome = () => {
  return (
    <>
      <div class={`${styles.block} row align-items-center mb-4`} id="contact">
        <div className="col-6">
          <h1 className={`${styles.titleOne} m-auto text-center`}>
            ¿Deseas mas información?
          </h1>
        </div>
        <div className="col-6">
          <h1 className={`${styles.titleTwo} m-auto text-center`}>
            ¡Contactanos!
          </h1>
        </div>
      </div>

      <div className={`${styles.container}`} >
        <div className={`${styles.content}`}>
          <div className={`row`}>
            <div className="col-6">
              <h1 className={`${styles.title1} mt-5 mb-5 text-center`}>
                Contácto
              </h1>
              <h1 className={`${styles.title2} text-center`}>
                Oficinas Tenería Rubio
              </h1>
              <p className={`${styles.subtitle1} text-center`}>0276-7622055 Ext-317</p>
              <p className={`${styles.subtitle1} text-center`}>0276-7620555</p>
              <h1 className={`${styles.title2} text-center`}>
                Correo Electronico
              </h1>
              <p className={`${styles.subtitle1} text-center`}>teneriarubioca@gmail.com</p>

              <img src={logo1} alt="" className={`${styles.logo} mt-3`} />
            </div>

            <div className="col-6 d-flex justify-content-center">
              <form className="mt-5">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className={`${styles.titleLabel} text-center form-label`}>
                    Nombre
                  </label>
                  <input
                    className={`${styles.input} form-control`}
                    type="email"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className={`${styles.titleLabel} text-center form-label`}>
                    Correo Electronico
                  </label>
                  <input
                    type="email"
                    className={`${styles.input} form-control`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleInputEmail1" className={`${styles.titleLabel} text-center form-label`}>
                    Telefono
                  </label>
                  <input
                    type="email"
                    className={`${styles.input} form-control`}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" className={`${styles.titleLabel} text-center form-label`}>
                    Mensaje
                  </label>
                  <textarea
                    className={`${styles.input} form-control`}
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button type="button" className={`${styles.btn} btn`}> Enviar </button>
              </form>
            </div>
          </div>
        </div>
      </div>


      <div class={`${styles.block2} row align-items-center`}>
        <div className="col-12">
          <h1 className={`${styles.title3} m-auto text-center`}>
          Pasión por el Cuero ❤
          </h1>
        </div>
      </div>
    </>
  );
};

export default ContactHome;
