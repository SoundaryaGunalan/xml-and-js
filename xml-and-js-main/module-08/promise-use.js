/**
 * Promise executor
 * Function that runs when promise is executed
 */
const executor = (resolve, reject) => {
  // do some work
  const check = true;

  if (check) {
    resolve(`resolved`);
  } else {
    reject(`rejected`);
  }
};

/**
 * Promise object
 * Has executor function as constructor argument
 */
const promise = new Promise(executor);

/**
 * Executes promise
 * .then -> resolved callback
 * .catch -> rejected callback
 */
promise
  .then((value) => console.log(value))
  .catch((error) => console.error(error));
