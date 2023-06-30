// this will refer to the lexical scope when using arrow functions

let person = {
  name: "Afton",
  hobbies: ["bike", "hike", "ski"],
  printHobbies: function () {
    this.hobbies.forEach((hobby) => {
      let str = `${this.name} likes to ${hobby}`;
      console.log(str);
    });
  }
};
person.printHobbies();