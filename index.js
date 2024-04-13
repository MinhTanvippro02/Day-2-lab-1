var example = 5;

function printNumber() {
  var test = 10;
  console.log(example);
  console.log(test);
}

printNumber();
console.log(example);

function formalGreeting() {
  console.log("How are you?");
}
function casualGreeting() {
  console.log("What's up?");
}
function greet(type, greetFormal, greetCasual) {
  if (type === "formal") {
    greetFormal();
  } else if (type === "casual") {
    greetCasual();
  }
}
greet("formal", formalGreeting, casualGreeting);

var arr1 = [1, 2, 3, 5, 8, 9];
var arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}
console.log(arr2);

var arr1 = [1, 2, 3];
var arr2 = arr1.map(function (item) {
  return item * 2;
});
console.log(arr2);

const birthYear = [1975, 1997, 2002, 1995, 1985];
const ages = [];
for (let i = 0; i < birthYear.length; i++) {
  let age = 2024 - birthYear[i];
  ages.push(age);
}
console.log(ages);

const birthyear = [1975, 1997, 2002, 1995, 1985];
const age = birthYear.map((year) => 2024 - year);
console.log(age);

var arr1 = [1, 2, 3];
var arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}
console.log(arr2);

const Birthyear = [1999, 1997, 2002, 1995, 1985];
const Ages = Birthyear.map((year) => 2024 - year);
console.log(Ages);

const persons = [
  { name: "Peter", age: 16 },
  { name: "Mark", age: 18 },
  { name: "John", age: 12 },
  { name: "Jane", age: 14 },
  { name: "Tony", age: 25 },
];
const fullAge = persons.filter((person) => person.age >= 18);
console.log(fullAge);

function getPersonES5(name, age) {
  return {
    name: name,
    age: age,
  };
}
function getPersonES6(name, age) {
  return {
    name,
    age,
  };
}
console.log(getPersonES5("John", 30));
console.log(getPersonES5("Mike", 25));
0;
s;
