//if/else statements

const age = 20;

/*const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log(`Sara can start driving`);
}
*/

if (age>= 18){
    console.log(`Sara can start driving`); 
}else{
    const yearsLeft = 18 - age;
    console.log (`Sarah is too young. Wait another ${yearsLeft} years :-)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000){
    century = 20;
} else {
    century = 21;
}
console.log (century);