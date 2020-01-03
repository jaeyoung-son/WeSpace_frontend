export const handleNumber = number => {
  let num = number.replace(/,/g, "");
  num = parseInt(num);
  return num;
};
