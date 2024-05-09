import { useState } from "react";

const AgregarTarea = ({ agregarTarea }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    agregarTarea(inputValue);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresar tarea"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
    </>
  );
};

export default AgregarTarea;
