// Test with different bill values: 275, 40, and 430
//const billRest = 430;

// Calculate the tip using a ternary operator :billRest * 0.20 is like the "else" statement
// (billRest >= 50 && billRest <= 300) ? billRest * 0.15 is like the if statement
// const tipRest = (billRest >= 50 && billRest <= 300) ? billRest * 0.15 : billRest * 0.20 ;

//const tipRest = (billRest >= 50 && billRest === 300) ? billRest * 0.15 : billRest * 0.20 ? (billRest > 300) *0.50);

// Calculate the total value (bill + tip)
//const totalBill = billRest + tipRest;

// Print the result
//console.log(`The bill was ${billRest}, the tip was ${tipRest}, and the total value ${totalBill}.`);

// Adding a 3rd condition

// Test with different bill values: 275, 40, and 430
const billRest = 600;

// Calculate the tip using the ternary operator
const tipRest = billRest < 50 // this like the 1st if statement
    ? billRest * 0.10
    : billRest <= 300 // this is like the 1st else statement
    ? billRest * 0.15
    : billRest < 300 > 500 // this would be the 2nd else statement
    ? billRest * 0.50
    :billRest * 0.80 // this is the final else if nothing else matches the billRest $ value and set tip rate


// Calculate the total value (bill + tip)
const totalBill = billRest + tipRest;

// Print the result
console.log(`The bill was ${billRest}, the tip was ${tipRest}, and the total value ${totalBill}.`);

