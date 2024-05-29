import "./style/login.css";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
const LoginScreen = () => {
  const initialForm = { nombre: "", tecnologia: "", email: "", edad: "" };
  const { nombre, tecnologia, email, edad, formState, onInputChange } =
    useForm(initialForm);
  const { setUsuario } = useContext(UsuarioContext);
  const onSubmit = (e) => {
    e.preventDefault();
    setUsuario(formState);
  };
  return (
    <>
      <div className="formulario-login-container">
        <form className="formulario-login" onSubmit={onSubmit}>
          <div className="mb-3">
            <label htmlFor="nombreUsuario" className="form-label">
              Nombre de usuario
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              name="nombre"
              value={nombre}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control form-control-sm"
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tecnologia" className="form-label">
              Tecnologia
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              name="tecnologia"
              value={tecnologia}
              onChange={onInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="edad" className="form-label">
              Edad
            </label>
            <input
              type="number"
              className="form-control form-control-sm"
              name="edad"
              value={edad}
              onChange={onInputChange}
              min={0}
            />
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="submit">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginScreen;
