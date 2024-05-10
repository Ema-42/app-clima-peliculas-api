import { useState } from "react";
import UserList from "../UserList/UserList";
import "./userapp.css";

const UsersApp = () => {
  const [endPoint, setEndpoint] = useState("users");
  const handdleFetch = () => {
    setEndpoint("comments");
  };

  /*   useEffect(() => {
    fetchUsers();
  }, []); */

  return (
    <>
      <h1 className="componente">User App Componente</h1>
      <h2>Lista de usuarios</h2>
      <h3>Como tabla: </h3>
      <UserList endPoint={endPoint}></UserList>
      <button onClick={handdleFetch}>Llamar a los usuarios</button>
    </>
  );
};

export default UsersApp;
