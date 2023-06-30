class Hike {
  constructor(distance, pace) {
    this.distance = distance;
    this.pace = pace;
  }
  get lengthInHours() {
    return `${this.calcHours()} hours`;
  }

  calcHours() {
    return this.distance/this.pace;
  }
}

let mtEverest = new Hike(10, 2);
console.log(mtEverest.lengthInHours);