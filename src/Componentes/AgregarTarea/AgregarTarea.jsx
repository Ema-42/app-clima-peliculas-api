import { useState } from "react";

const Item = ({ nombre, visto }) => {
  return (
    <li className="elemento">
      {nombre} {visto ? "✅" : "❌"}
    </li>
  );
};

const AgregarTarea = () => {
  let listadoSecciones = [
    { nombre: "Instalaciones necesarias", visto: true },
    { nombre: "Uso de Vite", visto: true },
    { nombre: "Componentes", visto: true },
    { nombre: "Variables de JSX", visto: true },
    { nombre: "Props", visto: true },
    { nombre: "Eventos", visto: true },
    { nombre: "Use State", visto: true },
    { nombre: "Redux", visto: false },
    { nombre: "customHooks", visto: false },
  ];
  const [arreglo, setArreglo] = useState(listadoSecciones);

  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
  };
  return (
    <>
      <h1 className="componente">COMPONENTE AGREGAR TAREA FORMULARIO</h1>
      <h2>Listado de temas cubiertos</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresar tarea"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
      <ol>
        {arreglo.map((item) => (
          <Item
            key={item.nombre}
            nombre={item.nombre}
            visto={item.visto}
          ></Item>
        ))}
      </ol>
    </>
  );
};

export default AgregarTarea;
