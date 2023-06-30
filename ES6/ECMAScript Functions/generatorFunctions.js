// Generator functions allow us to pause execution within a function
// Generator functions can be used to control the iterator (i.e. stop at a certain
// value/index).

function* director() {
  yield "Three";
  yield "Two";
  yield "One";
  yield "Action";
}

let countdown = director();

console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next().value);