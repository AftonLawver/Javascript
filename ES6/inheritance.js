class Vehicle {
  constructor(description, wheels) {
    this.description = description;
    this.wheels = wheels;
  }

  describeYourself = function() {
    console.log(`${this.description} with ${this.wheels} wheels`);
  };
}

class SemiTruck extends Vehicle{
  constructor() {
    super("semi truck", 18);
  }
}

let groceryStoreTruck = new SemiTruck();
groceryStoreTruck.describeYourself();

