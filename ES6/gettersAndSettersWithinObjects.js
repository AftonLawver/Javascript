let birthdayParty = {
  _listOfPeople: [],
  set addPerson(name) {
    this._listOfPeople.push(name);
  },

  get listOfPeople() {
    return this._listOfPeople.join(", ");
  }
};

birthdayParty.addPerson = "Afton Lawver";
birthdayParty.addPerson = "Rhonda Spindler";
birthdayParty.addPerson = "Kevin Lawver";

console.log(birthdayParty.listOfPeople);