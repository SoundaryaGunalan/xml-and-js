# Asynchronous JS

Modern software design increasingly revolves around using asynchronous programming, to allow programs to do more than one thing at a time. As you use newer and more powerful APIs, you'll find more cases where the only way to do things is asynchronously. It used to be hard to write asynchronous code.

When a web app runs in a browser and it executes an intensive chunk of code without returning control to the browser, the browser can appear to be frozen. This is called blocking; the browser is blocked from continuing to handle user input and perform other tasks until the web app returns control of the processor.

## Callbacks

```js
(callback) => callback(data)
(...args, callback) => callback(err, data)
```

> Standard contract: callback-last, error-first

### Callback-hell

```js
readConfig(`config.json`, (e, data) => {
  query(`select * from city`, (e, data) => {
    httpGet(`https://humber.ca`, (e, data) => {
      readFile(`README.md`, (e, data) => {});
    });
  });
});
```

```js
readConfig(`config.json`);

const readConfig = (fileName) => {
  ...;
  query(`select * from city`)
};

const query = (statement) => {
  ...;
  httpGet(`https://humber.ca`);
};
```

## Promises

```js
new Promise((resolve, reject) => {
  resolve(data);
  reject(new Error(...));
})
  .then((result) => {}, (reason) => {})
  .catch((error) => {})
```

Separated control flow for success and fail.

_Hell_ remains for complex parallel/sequential code

### Sequential Promises

```js
Promise.resolve()
  .then(() => readConfig(`config.json`))
  .then((config) => query(`select * from city`, config))
  .then((data) => httpGet(`https://humber.ca`, data))
  .catch(console.error)
  .then(readFile(`README.md`))
  .catch(console.error)
  .then((data) => {
    console.log(data);
  });
```

### Parallel Promises

```js
Promise.all([
  readConfig(`config.json`),
  query(`select * from city`),
  httpGet(`https://humber.ca`),
  readFile(`README.md`),
]).then((data) => {
  console.log(`Done`);
  console.log(data);
});
```

### Mixed Promises

```js
Promise.resolve()
  .then(() => readConfig(`config.json`))
  .then((config) =>
    Promise.all([
      query(`select * from city`, config),
      httpGet(`https://humber.ca`, config),
    ])
  )
  .then(() => readFile(`README.md`))
  .then((data) => {
    console.log(`Done`);
    console.log(data);
  });
```

## async/await

```js
async function f() {
  return await new Promise(...);
}

const f = async () => {
  return await new Promise(...);
};

f().then(console.log).catch(console.error);
```

Promises under the hood, Control-flow separated

## Problems

Problems of callbacks, Promise, async/await:

- Nesting and syntax
- Different contacts
- Not cancellable, no timeouts
- Complexity and Performance
