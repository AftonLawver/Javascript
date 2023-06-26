// The map object holds key-value pairs
// unlike objects, within maps, keys can be of any type

let course = new Map();

course.set("react", {description: "ui"});
course.set("jest", {description: "testing"});

console.log(course);

console.log(course.get("react"));

