import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import HooksApp from "./Componentes/HooksApp";
import CalculosPesados from "./Componentes/Calculos/CalculosPesados";
import CallBackComponent from "./Componentes/CallBack/CallBackComponent";
import ListaTareas from "./Componentes/ListaTareas/ListaTareas";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./Componentes/App/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      {/* PRIMERA SECCION */}
      {/*     <PrimerComponente />
    <Props subtitulo="ejemlpo de subtitulo" />
    <Contador value={0}></Contador>
    <ListadoApp></ListadoApp>
    <Listado></Listado>
    <UsersApp></UsersApp> */}

      {/* SEGUNDA SECCION */}
      {/* <HooksApp></HooksApp> */}
      {/*     <CalculosPesados></CalculosPesados>
    <CallBackComponent></CallBackComponent> */}
      {/* <ListaTareas></ListaTareas> */}
      <App></App>
    </React.StrictMode>
  </BrowserRouter>
);
