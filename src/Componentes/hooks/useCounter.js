import { useState } from "react";

const useCounter = (valorInicial = 0) => {
  const [contador, setContador] = useState(valorInicial);

  const incrementar = (valor = 1) => {
    setContador(contador + valor);
  };

  const decrementar = (valor = 1, negativo = false) => {
    if (!negativo && contador - valor < 0) {
      setContador(0);
      return;
    }
    setContador(contador - valor);
  };

  const resetear = (valor) => {
    setContador(0);
  };
  return {
    contador,
    incrementar,
    decrementar,
    resetear,
  };
};

export default useCounter;
