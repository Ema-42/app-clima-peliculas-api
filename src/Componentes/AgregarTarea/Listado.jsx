import { useState } from "react";
import AgregarTarea from "./AgregarTarea";
const Item = ({ nombre, visto , id }) => {
  return (
    <li className="elemento">
      {nombre} {visto ? "✅" : "❌"} id: {id}
    </li>
  );
};

const Listado = () => {
  const addTask = () => {
    let nombreGenerado = new Date().toISOString();
    let vistoCondicion = Math.random()>=0.5?false:true
    setArreglo([...arreglo, { nombre: nombreGenerado, visto: vistoCondicion , id: arreglo.length+1}]);
  };

  let listadoSecciones = [
    { id:1 ,nombre: "Instalaciones necesarias", visto: true },
    { id:2 ,nombre: "Uso de Vite", visto: true },
    { id:3 ,nombre: "Componentes", visto: true },
    { id:4 ,nombre: "Variables de JSX", visto: true },
    { id:5 ,nombre: "Props", visto: true },
    { id:6 ,nombre: "Eventos", visto: true },
    { id:7 ,nombre: "Use State", visto: true },
    { id:8 ,nombre: "Redux", visto: false },
    { id:9 ,nombre: "customHooks", visto: false },
  ];
  const [arreglo, setArreglo] = useState(listadoSecciones);

  const onAgregarTarea= (val) =>{
    let valor = val.trim()
    if (valor<1) return
    const envio = {
        id:arreglo.length+1,
        nombre: val,
        visto:false
    }
    setArreglo([...arreglo,envio])
  }
  return (
    <>
      <h1 className="componente">COMPONENTE Listado del Formulario</h1>
      <h2>Listado de temas cubiertos</h2>
      <AgregarTarea agregarTarea={onAgregarTarea} ></AgregarTarea>
      <ol>
        {arreglo.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            nombre={item.nombre}
            visto={item.visto}
          ></Item>
        ))}
      </ol>
      <button onClick={() => addTask()}>Agregar Tarea</button>
    </>
  );
};

export default Listado;
