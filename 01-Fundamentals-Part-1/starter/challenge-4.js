// Test with different bill values: 275, 40, and 430
const billRest = 430;

// Calculate the tip using a ternary operator
const tipRest = (billRest >= 50 && billRest <= 300) ? billRest * 0.15 : billRest * 0.20;

// Calculate the total value (bill + tip)
const totalBill = billRest + tipRest;

// Print the result
console.log(`The bill was ${billRest}, the tip was ${tipRest}, and the total value ${totalBill}.`);

