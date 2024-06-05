import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UsuarioContext } from "../../context/UsuarioContext";
import "./navbar.css";
const NavBar = () => {
  const { usuario } = useContext(UsuarioContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg " data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            Aplicacion de {usuario.nombre}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor02"
            aria-controls="navbarColor02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/login"} className="nav-link" >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/about"} className="nav-link">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/contact"} className="nav-link">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/clima"} className="nav-link">
                  Clima
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Opciones
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-sm-2"
                type="search"
                placeholder="¿Qué desea buscar?"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
