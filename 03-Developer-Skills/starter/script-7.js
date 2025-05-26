//More on arrays: Methods and operations

const friends = ['Mike', 'David', 'Tommy'];
console.log(friends);
//Add elements
friends.push('Jay');
console.log(friends);
console.log(friends.length);

//Add element at the begining of the array
friends.unshift('John');
console.log(friends);

//Remove the last element elements
friends.pop();
console.log(friends);
friends.pop(); // Removes the next one in sequence
console.log(friends);

//Remove the 1st element of the array
friends.shift();
console.log(friends);

//Get the index number of an element in the array
console.log(friends.indexOf('David'));
console.log(friends.indexOf('Harry'));

friends.push(23); 
//If 23 were written as '23' it wouldn't work since there is
// no type coercion

console.log(friends.includes('Mike'));
console.log(friends.includes('Harry'));
console.log(friends.includes(23));

if (friends.includes('David')) {
    console.log('You have a friend called David');
}
