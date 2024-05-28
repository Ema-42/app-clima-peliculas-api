import { useMemo, useState } from "react";
import "./style.css";

const CalculosPesados = () => {
  const [listaNumeros, setListaNumeros] = useState([
    2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const [show, setShow] = useState(false);

  const getCalculo=(listaNumeros) => useMemo(() => {
    return listaNumeros.reduce((a, b) => a * b);
  },[listaNumeros]);

  const agregarNumero = () => {
    setListaNumeros([
      ...listaNumeros,
      listaNumeros[listaNumeros.length - 1] + 1,
    ]);
    console.log(listaNumeros);
  };
  return (
    <>
      <h2>Calculo</h2>
      <p>{getCalculo(listaNumeros)}</p>
      <div className="d-grid gap-2">
        <button
          onClick={() => setShow(!show)}
          className="btn btn-primary"
          type="button"
        >
          {show ? "Hide" : "Show"}
        </button>
        <button
          className="btn btn-success"
          type="button"
          onClick={() => agregarNumero()}
        >
          Agregar Numero +
        </button>
        <h4 className="lista-titulo">Lista Actual: </h4>
        <div className="div-array">
          <p className="array">[{listaNumeros.join(", ")}]</p>
        </div>
      </div>
    </>
  );
};

export default CalculosPesados;
