import { useState } from "react";
import './listadoapp.css'
const Item = ({ nombre, visto }) => {
  return (
    <li className="elemento">
      {nombre} {visto ? "✅" : "❌"}
    </li>
  );
};

const ListadoApp = () => {
  const addTask = () => {
    setArreglo([...arreglo, { nombre: "nuevo", visto: false }]);
    console.log(arreglo);
  };

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
  console.log(arreglo);
  return (
    <>
      <h1 className="componente">COMPONENTE Listado app</h1>
      <h2>Listado de temas cubiertos</h2>
      <Item nombre="Instalaciones necesarias" visto={true}></Item>
      <Item nombre="Uso de Vite" visto={true}></Item>
      <Item nombre="Componentes" visto={true}></Item>
      <Item nombre="Variables de JSX" visto={true}></Item>
      <Item nombre="Props" visto={true}></Item>
      <Item nombre="Eventos" visto={true}></Item>
      <Item nombre="Use State" visto={true}></Item>
      <Item nombre="Redux" visto={false}></Item>
      <Item nombre="customHooks" visto={false}></Item>

      <h4>Usando MAP</h4>
      <ol>
        {arreglo.map((item) => (
          <Item
            key={item.nombre}
            nombre={item.nombre}
            visto={item.visto}
          ></Item>
        ))}
      </ol>
      <button onClick={() => addTask()}>Agregar Tarea</button>
    </>
  );
};

export default ListadoApp;
