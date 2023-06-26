// destructuring assignment gives us an easy way to extract
// data from arrays and assign them to objects and variables.

const names = ["Afton", "Bob", "Lee", "Austin"];

let [person1, ...rest] = names;
console.log(person1);
console.log(...rest);