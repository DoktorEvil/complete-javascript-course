//'use strict';
/*
const calcAverage = (dolphins, koalas) => {
    const dolphinAverage = (44 + 23 + 71) / 3;
    const koalasAverage = (65 + 54 + 49) / 3;

    return `${dolphinAverage}, ${koalasAverage}`
}

const calcAverage = (avgScore) => {
    const  teamScore = (sc1 + sc2 + sc3) / 3;
    return `${avgScore}`
}

console.log (calcAverage(44, 23, 71));
*/

'use strict';

const calcAverage = (score1, score2, score3) => {
    const  teamScore = (score1 + score2 + score3) / 3;
    return `${teamScore}`
}
console.log (calcAverage(44, 23, 71));

//const scoreDolphins = calcAverage(44, 23, 71);
//const scoreKoalas = calcAverage(65, 54, 49);

let  scoreDolphins = calcAverage(85, 54, 71);
let  scoreKoalas = calcAverage(85, 54, 71);
console.log(scoreDolphins, scoreKoalas);


const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
      console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
      console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else if (avgKoalas * 2 === avgDolphins * 2) {
      console.log(`It's a tie!`);
    } else {
      console.log('No team wins...');
    }
  };
   
  checkWinner(scoreDolphins, scoreKoalas);