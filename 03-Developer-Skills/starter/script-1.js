// Remember, we're gonna use strict mode in all scripts now!
// Helps with debugging ... change hasDriversLicense to hasDriverLicense in line 8 and shows undefined
//'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive :D');


// Functions

function logger () {
    console.log('My name is Todd');
}

// calling / running / involking a function

logger();
logger();
logger();
*/

'use strict';

function fruitProcessor(apples, oranges) {
//    console.log(apples, oranges); Don't forget the back ticks ` vs ' or this won't capture the value inputs
    const juice = `Juice wth ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const multiFruitJuice = fruitProcessor(4, 7);
console.log(multiFruitJuice);