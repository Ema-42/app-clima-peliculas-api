import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import HooksApp from "./Componentes/HooksApp";
import CalculosPesados from "./Componentes/Calculos/CalculosPesados";
import CallBackComponent from "./Componentes/CallBack/CallBackComponent";
import ListaTareas from "./Componentes/ListaTareas/ListaTareas";
import 'bootstrap-icons/font/bootstrap-icons.css';

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
    {/* <HooksApp></HooksApp> */}
    <CalculosPesados></CalculosPesados>
    <CallBackComponent></CallBackComponent>
    <hr />
    <ListaTareas></ListaTareas>
  </React.StrictMode>
);
