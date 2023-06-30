const {title, price} = {
  title: "Reuben",
  price: 7,
  description: "A classic",
  ingredients: [
    "bread",
    "corned beef",
    "dressing",
    "sauerkraut",
    "cheese"
  ]
};

// without destructuring I can use basic dot notation
// to grab the objects property values.
// console.log(sandwich.title);

// with destructuring, I basically save the value in a variable
console.log(title);

// Something a bit more complex

// Create an object called vacation with a few properties
const vacation = {
  destination: "Chile",
  activity: "skiing",
  travelers: 2,
  price: "too much"
};
// We only want to use a few of the more desirable properties for
// our marketing campaign. We use destructuring within our
// function call (parameters).
function marketing({destination, activity}) {
  return (`Come to ${destination} to go ${activity}`);
}

// We pass in the whole object and when the object is passed into the
// function, it is destructured to get only the properties that we
// specified in the function.
console.log(marketing(vacation));