// each value in a set must be unique

let books = new Set();

books.add("Pride and Prejudice");
books.add("War and Peace");

console.log(books);

console.log(books.size);

console.log("Has Oliver Twist", books.has("Oliver Twist"));