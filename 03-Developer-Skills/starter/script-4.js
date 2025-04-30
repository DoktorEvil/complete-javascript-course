// Functions calling other functions

'use strict';

const cutPieces = function (fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
//    console.log(apples, oranges); Don't forget the back ticks ` vs ' or this won't capture the value inputs
    
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice wth ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3));