const data = [
    { born: 1870, died: 1924 },
    { born: 1893, died: 1976 },
    { born: 1869, died: 1948 },
    { born: 1901, died: 1989 },
  ];

  const age = data.map((dataObject) => dataObject.died - dataObject.born);

  console.log("New Age is : ");
  console.log(age);
 

  const filter = age.filter((ageObject) => ageObject > 75);

  console.log("Age above 75 is fileterd: ");
  console.log(filter);
 

  const oldest = filter.reduce((accumulator, currentValue) => {
    if (accumulator > currentValue) {
      return currentValue;
    } else {
      return currentValue;
    }
  }, 0);

  console.log("OLdest Age:");
 
  console.log(oldest);
 
  const resultchain = data
    .map((dataObject) => dataObject.died - dataObject.born)
    .filter((filterObject) => filterObject > 75)
    .reduce((accumulator, currentValue) => {
      if ((accumulator, currentValue)) {
        return currentValue;
      } else {
        return currentValue;
      }
    }, 0);

  console.log("Final Result of Chaining:");
  console.log(resultchain);