/*const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
*/
const massMark = 65;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;



const bmiMark = massMark / (heightMark * heightMark);
const bmiJohn = massJohn / (heightJohn * heightJohn);

console.log(bmiMark);
console.log(bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;

//console.log(bmiMark > bmiJohn);

console.log(markHigherBMI);