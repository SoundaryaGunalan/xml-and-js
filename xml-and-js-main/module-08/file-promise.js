const fs = require("fs");
let filename = `${__dirname}/books.json`;

const checkIfExists = (filename) =>
  new Promise((resolve, reject) => {
    fs.exists(filename, (exists) => {
      if (exists) {
        resolve(filename);
      } else {
        reject("404: file not found");
      }
    });
  });

const checkIfFile = (filename) =>
  new Promise((resolve, reject) => {
    fs.stat(filename, (err, stats) => {
      if (err) {
        reject(err);
      }
      if (stats.isFile()) {
        resolve(filename);
      } else {
        reject("This location contains not a file");
      }
    });
  });

const readFile = (filename) =>
  new Promise((resolve, reject) => {
    fs.readFile(filename, null, (err, data) => {
      if (err) {
        reject(err);
      }

      resolve(JSON.parse(data));
    });
  });

const safeReadFile = (filename) =>
  checkIfExists(filename).then(checkIfFile).then(readFile);

safeReadFile(filename).then(console.log).catch(console.error);
