import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import HooksApp from "./Componentes/HooksApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* PRIMERA SECCION */}
    {/*     <PrimerComponente />
    <Props subtitulo="ejemlpo de subtitulo" />
    <Contador value={0}></Contador>
    <ListadoApp></ListadoApp>
    <Listado></Listado>
    <UsersApp></UsersApp> */}

    {/* SEGUNDA SECCION */}
    <HooksApp></HooksApp>
  </React.StrictMode>
);
