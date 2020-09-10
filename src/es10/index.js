let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

let array = [1, 2, 3, 4, 5];
console.log(array.flatMap((value) => [value, value * 2]));

let hello = "       Hola Samuel";
console.log(hello);
console.log(hello.trimStart());

let hello2 = "Hola samuel       ";
console.log(hello2);
console.log(hello2.trimEnd());

//optional catch binding
try {
} catch {
  error;
}

//función para convertir arreglos a objetos:
let entries = [
  ["name", "Samuel"],
  ["age", 32],
  ["country", "MX"],
];

console.log(Object.fromEntries(entries));

let mySymbol = "my simbol";
let symbol = Symbol(mySymbol);
console.log(symbol.description);
