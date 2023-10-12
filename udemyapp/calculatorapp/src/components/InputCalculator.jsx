import React, { useState } from "react";
import PropTypes from "prop-types";
import Result from "../Result";
import operaciones from "./helpers/OperationHelper";

const InputCalculator = () => {
  const [numeros, setNumeros] = useState({
    numero1: 10,
    numero2: 5,
  });

  const {
    handleChangeNumber,
    handleSuma,
    handleResta,
    handleMultiply,
    handleDivide,
    numero1,
    numero2,
  } = operaciones(numeros, setNumeros);

  return (
    <>
      <label className="mx-2">
        Numero 1 :{" "}
        <input
          name="numero1"
          value={numero1}
          onChange={handleChangeNumber}
          type="number"
        />
      </label>
      <label className="mx-2">
        Numero 2 :{" "}
        <input
          name="numero2"
          value={numero2}
          onChange={handleChangeNumber}
          type="number"
        />
      </label>

      <Result operacion="suma" calculo={handleSuma()} />
      <Result operacion="Resta" calculo={handleResta()} />
      <Result operacion="Multiplicacion" calculo={handleMultiply()} />
      <Result operacion="Division" calculo={handleDivide()} />
    </>
  );
};

InputCalculator.propTypes = {
  name: PropTypes.string,
};

export default InputCalculator;
