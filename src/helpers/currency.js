export const formatNumberToCurrency = (number, currency) => {
  const options = { style: 'currency', currency };
  const numberFormat = new Intl.NumberFormat('en-UK', options);
  return numberFormat.format(number)
}