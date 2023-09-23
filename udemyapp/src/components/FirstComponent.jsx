import React, { useState } from "react";

export const FirstComponent = () => {
  const [contador, setContador] = useState(0);

  const handleSubstract = () => {
    if (contador > 0) {
      setContador(contador - 1);
      console.log("restar : ", contador);
    }
  };

  const handleAdd = () => {
    setContador(contador + 1);
    console.log("sumar: ", contador);
  };

  const handleReset= ()=>{
    setContador(0);
  }

  return (
    <p>
      <button onClick={handleSubstract}> - </button>
      <h1>{contador}</h1>
      <button onClick={handleAdd}> + </button>
      <br />
      <button onClick={handleReset} className="reset">r</button>
    </p>
  );
};
