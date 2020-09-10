function newFunction(name, age, country) {
  var name = name || "Samuel";
  var age = age || 36;
  var country = country || "MX";
  console.log(name, age, country);
}

//ES6

function newFunction2(name = "Samuel", age = 36, country = "MX") {
  console.log(name, age, country);
}

newFunction2();

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

let lorem =
  "Quiero escribir una frase épica\n" + "Otra frase épica que necesitamos";

//es6

let lorem2 = `Otra frase épica que necesitamos
Esta es otra frase épica`;

console.log(lorem);
console.log(lorem2);

let person = {
  name: "Samuel",
  age: 36,
  country: "MX",
};

console.log(person.name, person.age, person.country);

//es6

let { name, age, country } = person;

console.log(age, name, country);

let team1 = ["Samuel", "Chavita", "Alex"];

let team2 = ["Male", "Sofy", "Naye"];

let education = ["David", ...team1, ...team2];

console.log(education);

{
  var globalVar = "Global Var";
}

{
  let globalLet = "Global Let";
  console.log(globalLet);
}

console.log(globalVar);

const a = "B";

a = "A";

let name = "Samuel";
let age = 36;

//es5
obj = { name: name, age: age };
//es6
obj2 = { name, age };

console.log(obj2);

//Arrow Functions
const names = [
  { name: "Samuel", age: 36 },
  { name: "Alex", age: 14 },
];
//es5
let listOfNames = names.map(function (item) {
  console.log(item.name);
});
//es6
let listOfNames2 = names.map((item) => console.log(item.name));

const listOfNames3 = (name, age, country) => {};

const listOfNames4 = (name) => {};

const square = (num) => num * num;

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!!!");
    } else {
      reject("Uuups");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(console.log("Hola"))
  .catch((error) => console.log(error));

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

import { hello } from "./module";

hello();

function* helloWorld() {
  if (true) {
    yield "Hello";
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
