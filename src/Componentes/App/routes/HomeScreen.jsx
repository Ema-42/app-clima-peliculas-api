import { useContext } from "react";
import { UsuarioContext } from "../context/UsuarioContext";
const HomeScreen = () => {
  const { usuario } = useContext(UsuarioContext);
  return (
    <>
      <h4 className="titulo-home">Contenido del Home</h4>
      <table className="table table-striped table-dark">
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
    </>
  );
};

export default HomeScreen;
