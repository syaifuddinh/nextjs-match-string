export const formatCurrency = (number: string | number) => {
  // Convert number to string
  if(!number) return 0;
  let numberStr = number;
  if(typeof numberStr === "number") numberStr = numberStr.toString();

  // Split the string into integer and decimal parts (if decimal exists)
  let parts = numberStr.split(".");
  let integerPart = parts[0];
  let decimalPart = parts[1] || null;

  // Add commas to the integer part
  let formattedInteger = "";
  for (let i = integerPart.length - 1, count = 0; i >= 0; i--, count++) {
    if (count !== 0 && count % 3 === 0) {
      formattedInteger = "," + formattedInteger;
    }
    formattedInteger = integerPart[i] + formattedInteger;
  }

  // Combine the integer and decimal parts
  let formattedNumber = formattedInteger;
  if (decimalPart !== null) {
    formattedNumber += "." + decimalPart;
  }

  // Return the formatted number
  return formattedNumber;
}