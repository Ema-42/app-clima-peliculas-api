import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className=" text-white text-center text-lg-start">
      <div className="container p-4">
        <section className="mb-4 section-iconos">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="bi bi-twitter"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="bi bi-google"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="#!"
            role="button"
          >
            <i className="bi bi-github"></i>
          </a>
        </section>

        <section className="">
          <form action="">
            <div className="row d-flex justify-content-center form-suscribe">
              <div className="col-12 col-md-2">
                <p className="text-center">
                  <strong>Correo</strong>
                </p>
              </div>
              <div className="col-12 col-md-6">
                <div className="form-white mb-4">
                  <input
                    type="email"
                    className="form-control"
                    id="footer-input-correo"
                  />
                </div>
              </div>
              <div className="col-12 col-md-auto">
                <button
                  type="submit"
                  className="btn btn-success mb-4 w-100 w-md-auto"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="mb-4">
          <p>Este es un parrafo que va en el footer</p>
        </section>
      </div>

      <div className="text-center p-3 div-copyright">
        <span>
          © 2024 Copyright:{" "}
          <a className="text-white" href="">
            Todos los izquierdos reservados
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
