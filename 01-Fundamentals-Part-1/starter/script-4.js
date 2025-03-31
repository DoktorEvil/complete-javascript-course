// Template literals

const firstName = 'Todd';
const myJob = 'Manager';
const birthYear = 1960;
const currentYear = 2024;

//Hard way
const todd = "I'm " + firstName +  ', a ' + (currentYear - birthYear)  + ' year old ' + myJob + '!';
console.log(todd);

//Easier using ``
const toddNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${myJob}!`;
console.log(toddNew);

//Can use back ticks for any regular strings versus the \n newline characters
//Example

console.log(`String with
Many
Lines!`);
