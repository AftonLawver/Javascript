// map function iterates through an array and does some transformation
// to each element in the array and returns that as a new array
// without modifying the original array.

const numbers = [ 1,2,3,4,5 ];

const result = numbers.map((number) => {
    return number * 2;
})

console.log(result);