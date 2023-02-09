const hof = (arg) => {
  arg();
  return `I just invoked ${arg.name} as a callback function!`;
};

const argFunc = () => {
  console.log("I'm being invoked by the higher-order function!");
};

console.log(hof(argFunc));

console.log(
  hof(() => {
    for (let i = 0; i <= 10; i++) {
      console.log(i);
    }
  })
);
