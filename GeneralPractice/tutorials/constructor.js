function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
  this.drive = function () {
    console.log(`You drive the ${this.model} ${this.year} model`);
  };
  this.specs = function () {
    console.log(
      `You picked a ${this.make} ${this.model} manufactured in ${this.year} colored ${this.color}`
    );
  };
}

const car1 = new Car("Mercedes", "GLE", "2025", "Black");

console.log(car1);
car1.specs();
car1.drive();
