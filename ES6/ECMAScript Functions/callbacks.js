function add(x,y, callback) {
  let sum = x + y;
  callback(sum);
}

function total(sum) {
  console.log(`Total is ${sum}`);
}

add(5,4, total);