import { useEffect, useReducer } from "react";
import useForm from "../hooks/useForm";
import "./style.css";

const fechaActual = new Date()
  .toLocaleString("es-ES", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
  .replace(
    /(\d{2})\/(\d{2})\/(\d{4}),\s(\d{2}):(\d{2}):(\d{2})/,
    "$2-$1-$3 $4:$5:$6"
  );

const initialState = [
  {
    id: new Date().getTime(),
    tarea: "Explicar Reducers",
    finalizada: false,
    fecha: fechaActual,
  },
];

const tareaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "[TAREAS] Agregar Tarea":
      return [...state, action.payload];
    case "[TAREAS] Finalizar Tarea":
      return state.map((tarea) => {
        if (tarea.id === action.payload)
          return {
            ...tarea,
            finalizada: !tarea.finalizada,
          };
        return tarea;
      });
    case "[TAREAS] Borrar Tarea":
      return state.filter((tarea) => tarea.id !== action.payload);
    case "[TAREAS] Borrar Todo":
      return [];
    default:
  }
  return state;
};

const ListaTareas = () => {
  const [tareasState, dispatch] = useReducer(tareaReducer, initialState);

  const { tarea, formState, onInputChange, setFormState } = useForm({
    tarea: "",
  });

  const agregarTareaForm = (event) => {
    event.preventDefault();
    if (formState.tarea == "") return;
    const tarea = {
      id: new Date().getTime(),
      tarea: formState.tarea,
      finalizada: false,
      fecha: fechaActual,
    };
    const action = {
      type: "[TAREAS] Agregar Tarea",
      payload: tarea,
    };
    dispatch(action);
    setFormState({ tarea: "" });
  };

  const finalizaarTarea = ({ id }) => {
    const action = {
      type: "[TAREAS] Finalizar Tarea",
      payload: id,
    };
    dispatch(action);
  };

  const borrarTarea = ({ id }) => {
    const action = {
      type: "[TAREAS] Borrar Tarea",
      payload: id,
    };
    dispatch(action);
  };

  const borrarTodo = () => {
    const action = {
      type: "[TAREAS] Borrar Todo",
      payload: "",
    };
    dispatch(action);
  };
  return (
    <>
    <hr />
      <div className="contenedor-tareas">
        <h2>Agregar tareas reducer</h2>
        <form onSubmit={agregarTareaForm}>
          <div className="mb-3 input-group input-ingresar-tarea">
            <span className="input-group-text">
              <i className="bi bi-card-text"></i>
            </span>
            <input
              value={tarea}
              type="text"
              className="form-control"
              name="tarea"
              placeholder="Ingresa tarea"
              onChange={onInputChange}
              autoComplete="off"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary mb-3 w-100">
              Agregar
              <i className="bi bi-plus-circle-fill ms-2"></i>
            </button>
            <button
              type="button"
              className="btn btn-danger mb-3 w-100"
              onClick={borrarTodo}
            >
              Delete All
              <i className="bi bi-trash-fill ms-2"></i>
            </button>
            {tareasState.length === 0 ? (
              <span className="mensaje-lista">
                La lista de tareas se encuentra vacia 👍
              </span>
            ) : (
              ""
            )}
          </div>
        </form>
        <div className="listado-tareas">
          <ul className="list-group">
            {tareasState.map((item) => {
              return (
                <li
                  className={`list-group-item ${
                    item.finalizada ? "tarea-finalizada" : "tarea-pendiente"
                  }`}
                  key={item.id}
                >
                  <span className="tarea-texto">{item.tarea}</span>
                  <span className="tarea-fecha">{item.fecha}</span>
                  <div className="form-check opciones form-switch d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      checked={item.finalizada}
                      onChange={() => finalizaarTarea(item)}
                    />
                    <button
                      className="btn btn-danger btn-sm ms-2 btn-borrar"
                      onClick={() => borrarTarea(item)}
                    >
                      Borrar
                      <i className="bi bi-trash-fill ms-1"></i>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ListaTareas;
