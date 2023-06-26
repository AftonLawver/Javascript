// turns the elements of an array into elements of an array literal

let cats = ["Biscuit", "Jungle"];
let dogs = ["Azula", "Stella"];

// the spread operator (...) takes all the elements within an array
// and substitues them into the variable name
let animals = ["Swimmy", "Miro", ...cats, ...dogs];

console.log(animals);





