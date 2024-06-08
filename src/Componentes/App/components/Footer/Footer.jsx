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
            <div className="row d-flex justify-content-center">
              <div className="col-2">
                <p className="pt-2">
                  <strong>Correo</strong>
                </p>
              </div>
              <div className="col-auto  ">
                <div className="form-outline form-white mb-4">
                  <input type="email" className="form-control" id="footer-input-correo" />
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-light mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus.
          </p>
        </section>
      </div>

      <div className="text-center p-3 div-copyright">
        © 2024 Copyright: 
        <a className="text-white" href="wa.me/59176821922">
          Whatsapp
        </a>
      </div>
    </footer>
  );
};

export default Footer;
