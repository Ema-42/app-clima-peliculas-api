import { useEffect, useRef } from "react";
import useForm from "../hooks/useForm";

const FormularioComponent = () => {
  const focusRef = useRef();
  console.log(focusRef);

  const initialForm = {
    userName: "",
    email: "",
    password: "",
    color: "",
    textarea: "",
  };
  const {
    userName,
    email,
    password,
    color,
    textarea,
    formState,
    onInputChange,
  } = useForm(initialForm);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  useEffect(() => {
    focusRef.current.focus();
  }, []);

  return (
    <>
      <h2>Formulario</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            name="userName"
            placeholder="User Name"
            value={userName}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Email address
          </label>
          <input
            ref={focusRef}
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Textarea" className="form-label">
            Textarea
          </label>
          <textarea
            name="textarea"
            value={textarea}
            onChange={onInputChange}
            className="form-control"
            placeholder="Introduce lo que sea"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleColorInput" className="form-label">
            Color picker
          </label>
          <input
            type="color"
            name="color"
            className="form-control form-control-color"
            value={color}
            onChange={onInputChange}
            title="Choose your color"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default FormularioComponent;
