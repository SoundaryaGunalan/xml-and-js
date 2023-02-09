// Arrow function with two arguments
const add = (firstParam, secondParam) => {
  return firstParam + secondParam;
};
console.log(add(2, 5)); // Prints: 7

// Concise arrow functions
const addShort = (firstParam, secondParam) => firstParam + secondParam;
console.log(add(2, 5));

// Arrow function with no arguments
const print = () => {
  console.log("hello");
};
print(); // Prints: hello

// Arrow functions with a single argument
const printValue = (value) => {
  console.log(value);
};
printValue(25);

// Concise arrow functions
const multiply = (a, b) => a * b;
console.log(multiply(2, 30)); // Prints: 60
