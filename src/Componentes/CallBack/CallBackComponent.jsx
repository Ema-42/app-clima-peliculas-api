import Incrementar from "./Incrementar";
import { useCallback, useState } from "react";
const CallBackComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementarPadre = useCallback((value) => {
    setCounter(contador=>contador + value);
  },[]);

  return (
    <>
      <hr />
      <h2>CallBack Component</h2>
      <h3>Contador: {counter} </h3>
      <Incrementar incrementar={incrementarPadre}></Incrementar>
    </>
  );
};

export default CallBackComponent;
