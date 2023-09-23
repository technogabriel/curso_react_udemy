// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./CounterComponent.css";

export const CounterComponent = () => {
  const [contador, setContador] = useState(0);

  const handleSubstract = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const handleAdd = () => {
    setContador(contador + 1);
  };

  const handleReset = () => {
    setContador(0);
  };

  return (
    <>
      <h1>{contador}</h1>
      <br />

      <button onClick={handleSubstract}> - </button>
      <button onClick={handleReset} className="reset">
        reset
      </button>
      <button onClick={handleAdd}> + </button>
    </>
  );
};
