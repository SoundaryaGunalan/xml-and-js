/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
 */

const timeout= (ms, callback) => {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
        callback();
      }, ms);
    });
  }
  
  const generateRandomNumber = () => (Math.random() * 40);
 
  
  const generateData = callback => {
    timeout(1000, () =>{
      const data = Array.from({ length: 20 }, generateRandomNumber);
      callback(data);
    });
  }
  
  const convertToFeet = (meters, callback)=> {
    const feet = meters * 3.2808;
    timeout(3500,() => {
      callback(feet);
    });
  }
  
  const processData =(data, callback) => {
    data.map(value => {
      callback(value);
    });
  }
  
  const logResult =(meters, feet)=> {
    console.log(`Converted ${meters}m to ${feet}ft`);
  }
  
  const main =()=>{
    console.log("Start");
    generateData(data => {
      processData(data, value => {
        convertToFeet(value, result => {
          logResult(value, result);
        });
      });
    });
    console.log("Finish");
  }
  
  main();

  