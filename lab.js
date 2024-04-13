let currentDate = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentDate.getDay()];
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();
let toDay = `Today is : ${day}. Current time is : ${hours} : ${minutes} : ${seconds}`;

console.log(toDay);

let date = new Date();
let newDate =
  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

console.log("dd/mm/yyyy: " + newDate);

function cToF(C) {
  let F = (C * 9) / 5 + 32;
  return F;
}

let C = 60;
let F = cToF(C);
console.log(C + " Độ C " + F + " Độ F");

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}
let string = "Hello World";

let reversed = reverseString(string);
console.log(reversed);
