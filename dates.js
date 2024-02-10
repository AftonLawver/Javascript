function millisecondsToDate(milliseconds) {
    const date = new Date(milliseconds);
    return date;
  }
  
const milliseconds = 1632269482000; // Example milliseconds value
const dateFromMilliseconds = millisecondsToDate(milliseconds);
console.log(dateFromMilliseconds); // This will display the date corresponding to the milliseconds value