import { useState } from "react";
const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);


  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      //para guardar los otros dos (pass,email) que no se estan modif
      ...formState,
      [name]: value,
    });
  };
  return { ...formState, formState,onInputChange };
};

export default useForm;
