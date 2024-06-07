import "./style/login.css";
import useForm from "../hooks/useForm";
import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
const LoginScreen = () => {
  const tecnologias = [
    { nombre: "Python", value: 1, id: 1 },
    { nombre: "JavaScript", value: 2, id: 2 },
    { nombre: "React", value: 3, id: 3 },
    { nombre: "Node.js", value: 4, id: 4 },
    { nombre: "Angular", value: 5, id: 5 },
    { nombre: "Vue.js", value: 6, id: 6 },
    { nombre: "Ruby on Rails", value: 7, id: 7 },
    { nombre: "Django", value: 8, id: 8 },
    { nombre: "Spring", value: 9, id: 9 },
    { nombre: "Flutter", value: 10, id: 10 },
  ];

  const initialForm = {
    nombre: "",
    tecnologia: tecnologias[0].nombre,
    email: "",
    edad: "",
  };

  const { nombre, tecnologia, email, edad, formState, onInputChange } =
    useForm(initialForm);
  const { setUsuario } = useContext(UsuarioContext);

  const onSubmit = (e) => {
    e.preventDefault();
    setUsuario(formState);
    console.log(formState);
  };

  return (
    <>
      <div className="formulario-login-container">
        <form className="formulario-login" onSubmit={onSubmit}>
          <span className="formulario-titulo">Formulario de Registro</span>
          <div className="mb-3">
            <label htmlFor="nombreUsuario" className="form-label">
              Nombre de usuario
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-person-fill custom-icon"></i>
              </span>
              <input
                type="text"
                className="form-control"
                name="nombre"
                value={nombre}
                onChange={onInputChange}
                placeholder="Introduce un nombre"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="mb-3 input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope-fill custom-icon"></i>
              </span>
              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={onInputChange}
                placeholder="Introduce tu email "
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="tecnologia" className="form-label">
              Tecnologia
            </label>
            <div className="mb-3 input-group">
              <span className="input-group-text">
                <i className="bi bi-file-earmark-code-fill custom-icon"></i>
              </span>
              <select
                className="form-select form-control"
                aria-label="Default select example"
                name="tecnologia"
                onChange={onInputChange}
                value={tecnologia}
              >
                {tecnologias.map((item) => (
                  <option key={item.id} value={item.nombre}>
                    {item.nombre}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="edad" className="form-label">
              Edad
            </label>
            <div className="mb-3 input-group">
              <span className="input-group-text">
                <i className="bi bi-person-vcard-fill custom-icon"></i>
              </span>
              <input
                type="number"
                className="form-control"
                name="edad"
                value={edad}
                onChange={onInputChange}
                min={0}
                placeholder="Edad"
              />
            </div>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary mb-2" type="submit">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginScreen;
