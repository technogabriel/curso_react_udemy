 const operaciones = (numeros, setNumeros) => {
  const { numero1, numero2 } = numeros;

  const handleChangeNumber = (e) => {
    setNumeros({
      ...numeros,
      [e.target.name]: parseFloat(e.target.value),
    });
    
  };
  const handleSuma = () => numero1 + numero2;
  const handleResta = () => numero1 - numero2;
  const handleMultiply = () => numero1 * numero2;
  const handleDivide = () => (numero2 > 0 ? numero1 / numero2 : 0);

  return {
    handleChangeNumber,
    handleSuma,
    handleResta,
    handleMultiply,
    handleDivide,
    numero1,
    numero2
  };
};
export default operaciones;
