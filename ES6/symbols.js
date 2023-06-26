// Symbols were introduced in ES6 as a primitive data type
// They are used to provide a way to create unique and immutable values.

const mySymbol = Symbol('hello');
console.log(typeof mySymbol);

// Every symbol that I create is unique, even if they store the same value
const mySymbol2 = Symbol(1);
const mySymbol3 = Symbol(1);

console.log(mySymbol2 === mySymbol3);

// you can see the same here.. no two symbols are the same
console.log(Symbol() === Symbol());