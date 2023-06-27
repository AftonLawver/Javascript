for (let letter of "JavaScript") {
    console.log(letter);
}

let topics = new Map();
topics.set("HTML", "/topics/HTML");
topics.set("CSS", "/topics/CSS");
topics.set("JS", "/topics/JS");

// Can use topics.entries or just topics to get all entries (key and values for all)
// Can use topics.keys() to get just the keys
// Can use topics.values() to get just the values.
for (let topic of topics.entries()) {
    console.log(topic);
}