console.log(`before`);
setTimeout(() => {
  console.log("async function");
}, 2000);
console.log(`after`);
