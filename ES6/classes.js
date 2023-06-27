class Vehicle {
    constructor(description, wheels) {
        this.description = description;
        this.wheels = wheels;
    }

    describeYourself = function() {
        console.log(`${this.description} with ${this.wheels} wheels`);
    }
}

let coolSkiVan = new Vehicle("cool ski van", 4);
coolSkiVan.describeYourself();

