//More on functions & expressions
// Below is a function declaration, you can call a function declaration before initialization

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// Function Expression produce values, you can't call a function declaration before initialization
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);
