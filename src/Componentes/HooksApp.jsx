import React from "react";
import ContadorComponent from "./ContadorComponent/ContadorComponent";
import FormularioComponent from "./Formulario/FormularioComponent";
import UsuariosComponent from "./Usuarios/UsuariosComponent";

const HooksApp = () => {
  return (
    <>
      <h1>Aplicacion de hooks</h1>
      <ContadorComponent></ContadorComponent>
      <hr />
      <FormularioComponent></FormularioComponent>

      <UsuariosComponent></UsuariosComponent>
    </>
  );
};

export default HooksApp;
