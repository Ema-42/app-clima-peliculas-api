import { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
import "./style/home.css";
import users from "../assets/users.json";

const HomeScreen = () => {
  const { usuario } = useContext(UsuarioContext);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Aquí estamos directamente importando los datos, no necesitamos fetch
    setUsuarios(users);
  }, []);

  return (
    <>
      <div className="conteiner-home">
      <div className="tabla-datos-2"> 
        <h4 className="titulo-home">Contenido del Home</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Edad</th>
              <th scope="col">Usuario</th>
              <th scope="col">Tecnologia </th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{usuario.edad}</th>
              <td>{usuario.nombre}</td>
              <td>{usuario.tecnologia}</td>
              <td>{usuario.email}</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className="tabla-datos-2">
          <span>Datos de muestra</span>
          <table className="table table-striped" >
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Pais </th>
                <th scope="col">Tecnología</th>
                <th scope="col">Email</th>
                <th scope="col">Edad</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, index) => (
                <tr key={index}>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.apellido}</td>
                  <td>{usuario.pais}</td>
                  <td>{usuario.tecnologia}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.edad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
