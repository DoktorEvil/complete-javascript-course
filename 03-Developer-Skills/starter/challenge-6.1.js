/*
const billRest = 555;

const calcTip = billRest < 50 // this like the 1st if statement
    ? billRest * 0.20
    : billRest <= 300 // this is like the 1st else statement
    ? billRest * 0.15
    : billRest > 300 // this would be the 2nd else statement
    ? billRest * 0.20
    : billRest * 0.80
 
// Calculate the total value (bill + tip)
const totalBill = billRest + calcTip;

const billArray = [];
billArray.push(billRest);
console.log(billRest);

const tipArray = [];
tipArray.push(calcTip);
console.log(tipArray);

// Print the result
console.log(`The bill was ${billRest}, the tip was ${calcTip}, and the total value ${totalBill}.`);
*/

// Function to calculate the tip
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// Bills array
const bills = [125, 555, 44];
console.log(bills);

// Tips array calculated using the function
const tips = bills.map(calcTip);
console.log(tips);

// Totals array (bill + tip)
const totals = bills.map((bill, index) => bill + tips[index]);
console.log(totals);

// Print results
bills.forEach((bill, index) => {
    console.log(`The bill was $${bill}, the tip was $${tips[index]}, and the total value $${totals[index]}.`);
});

bills.length = 0;
console.log(bills); // Output: []

tips.length = 0;
console.log(tips); // Output: []

