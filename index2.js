class House {
  constructor(width, hight, address, floors = 2) {
    this.width = width;
    this.hight;
    this.address = address;
    this.floors = floors;
  }
}
let myHouse = new House(200, 100, "HCM", 1);
console.log(myHouse);

class Cat {
  constructor(name = "meo meo") {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} Gây ra tiếng ồn`);
  }
}
class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + "Gamm");
  }
}
var lion = new Lion("fuzzy");
lion.speak();
