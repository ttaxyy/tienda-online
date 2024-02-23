function PesosChilenos(number) {
  const formatNumberToChileanPesos = (number) => {
    // Formatea el número como un valor monetario con separadores de miles y decimales
    const formattedNumber = new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(number);
    return formattedNumber;
  };

  return formatNumberToChileanPesos(number);
}

export default PesosChilenos;
