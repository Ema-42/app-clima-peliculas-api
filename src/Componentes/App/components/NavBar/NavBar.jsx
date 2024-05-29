import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UsuarioContext } from "../../context/UsuarioContext";
import './style.css'
const NavBar = () => {
  const { usuario } = useContext(UsuarioContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Aplicacion de {usuario.nombre}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={"/login"} className="nav-link">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/"}
                  className="nav-link"
                  aria-current="page"
                >
                  Home
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
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
