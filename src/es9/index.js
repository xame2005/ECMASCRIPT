const obj = {
  name: "Samuel",
  age: 36,
  country: "MX",
};

let { country, ...all } = obj;
console.log(all);

const obj2 = {
  name: "Samuel",
  age: 36,
  country: "MX",
};

const obj3 = {
  ...obj2,
  country: "MX",
};

console.log(obj3);

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true ? resolve("Hello World") : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log("response"))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizado"));

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
