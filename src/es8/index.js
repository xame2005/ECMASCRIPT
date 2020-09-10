const data = {
  frontend: "Samuel",
  backend: "Alexander",
  designer: "Chavita",
};

//Crea una matriz con todos los elementos de data
const entries = Object.entries(data);
//muestra la matriz
console.log(entries);
//cuenta los elementos dentro de entries
console.log(entries.length);

const data = {
  frontend: "Samuel",
  backend: "Alexander",
  designer: "Chavita",
};

//muestra solo los valores sin la asignacion
const values = Object.values(data);
console.log(values);

const string = "Hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, "==="));

const obj = {
  name: "Samuel",
};

//Async Await en ES8

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsinc = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsinc();

const anotherFuncion = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};

anotherFuncion();
