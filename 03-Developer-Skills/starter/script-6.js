//All about arrays for beginners

const friend1 = 'Mike';
const friend2 = 'David';
const friend3 = 'Tommy';

const friends = ['Mike', 'David', 'Tommy'];
console.log(friends);

// Can define an array this way too, but most of the times we use the style above
//const year = new Array(1991, 1982, 2002, 2006);

/*
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 3]);

const numThings = ['0', '1', '2'];
console.log(numThings);

console.log(numThings.length);
console.log(numThings[numThings.length - 1]);
*/

//Exercise
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

//Arrays within an array
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);