// default values can be used for parameters when they are not
// supplied/passed in by the caller by just setting the parameter = to
// the default value.

function add(x=5,y=6) {
  return x+y;
}

console.log(add());
console.log(add(3,4));

function haveFun(activity="biking", numOfHours=2) {
  return `I will go ${activity} for ${numOfHours} hours`;
}

console.log(haveFun());
console.log(haveFun("hiking", 2.5));
