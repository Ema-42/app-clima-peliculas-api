import "./contador.css";
import { useState } from "react";


function handleClick(event, otro) {
  console.log(event);
  console.log(otro);
}

const Button = ({ content = "Soy un Boton" }) => {
  return (
    <button onClick={(event) => handleClick(event, "otro argumento")}>
      Soy un Botonnn
    </button>
  );
};

const Contador = ({ value }) => {
  const [contador,setContador] = useState(value)
  const modificarValor = () => {
    setContador(contador+1);
    console.log(contador);
  };

  return (
    <>
      <h1 className="componente">COMPONENTE Contador</h1>
      <p>{contador}</p>
      <Button content="Mi nombre es Emanuel"></Button> <br />
      <button onClick={modificarValor}>Contador {contador}</button>
    </>
  );
};

export default Contador;
