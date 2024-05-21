import { useState } from "react";
import UserList from "../UserList/UserList";
import "./userapp.css";

const UsersApp = () => {
  const [endPoint, setEndpoint] = useState("users");

  const handdleFetch = () => {
    endPoint === "users" ? setEndpoint("comments") : setEndpoint("users");
  };

  return (
    <>
      <h1 className="componente">User App Componente</h1>
      <h2>Lista de {endPoint==="users"?"Usuarios":"Comentarios"}</h2>
      <h3>Como tabla: </h3>
      <UserList endPoint={endPoint}></UserList>
      <button onClick={handdleFetch}>Llamar a los usuarios</button>
    </>
  );
};

export default UsersApp;
