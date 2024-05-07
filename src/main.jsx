import React from "react";
import ReactDOM from "react-dom/client";
import PrimerComponente from "./PrimerComponente";
import { Props } from "./Props";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimerComponente />
    <Props

      subtitulo="ejemlpo de subtitulo"

    />
  </React.StrictMode>
);
