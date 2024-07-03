// Convertir la tasa de interés anual a tasa de interés mensual
export const convertInterestAnual = (rate) => {
  return parseFloat(rate) / 100 / 12;
};

// Calcular el número total de pagos (meses)
export const calculatePayment = (year) => {
  return parseInt(year) * 12;
};

// Calcular el pago mensual usando la fórmula de amortización
export const calculateMonthPayment = (amount, rate, year) => {
  return (
    (parseFloat(amount) * (rate * Math.pow(1 + rate, year))) /
    (Math.pow(1 + rate, year) - 1)
  );
};
