import Carrusel from "../components/carrusel/Carrusel";
import "./style/about.css";
const AboutScreen = () => {
  return (
    <>
      <div className="conteiner-about">
        <h4 className="titulo">About de la Página</h4>
        <Carrusel></Carrusel>
        <div className="alert alert-dismissible alert-success">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
          ></button>
          <strong>Muy bien!</strong> Lo de arriba es un carrusel{" "}
          <a href="#" className="alert-link">
            click aqui para ver más
          </a>
          .
        </div>

        <div className="alert alert-dismissible alert-primary">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
          ></button>
          <strong>Muy bien!</strong> Lo de arriba es un carrusel{" "}
          <a href="#" className="alert-link">
            click aqui para ver más
          </a>
          .
        </div>
        <h5>Progreso con animación</h5>
        <div className="progress">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "75%" }}
          ></div>
        </div>
        <div className="cards-container">
          <div className="card text-white bg-primary mb-3 mt-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h4 className="card-title">Primary card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card text-white bg-warning mb-3 mt-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h4 className="card-title">Primary card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div className="card text-white bg-success mb-3 mt-3">
            <div className="card-header">Header</div>
            <div className="card-body">
              <h4 className="card-title">Primary card title</h4>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutScreen;
