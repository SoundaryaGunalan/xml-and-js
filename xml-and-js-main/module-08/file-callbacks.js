const fs = require("fs");
let filename = `${__dirname}/books.json`;

fs.exists(filename, (exists) => {
  if (exists) {
    fs.stat(filename, (err, stats) => {
      if (err) {
        throw err;
      }
      if (stats.isFile()) {
        fs.readFile(filename, null, (err, data) => {
          if (err) {
            throw err;
          }
          console.log(JSON.parse(data));
        });
      } else {
        throw new Error("This location contains not a file");
      }
    });
  } else {
    throw new Error("404: file not found");
  }
});
