/* eslint-disable import/prefer-default-export */
export const formatNumber = (number: number, minFractionDigits = 3) => {
  const formattedNumber = Intl.NumberFormat('en', {
    notation: 'compact',
    minimumFractionDigits: minFractionDigits,
  }).format(number);

  return formattedNumber;
};
