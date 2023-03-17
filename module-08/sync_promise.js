function inc(a) {
     return new Promise((resolve, reject) => {
        if(!isNaN(a)){
            resolve('Promise inc Executed');
            console.log("inc(5) =", a + 1);
            
          }
          else{
              reject('a is not a number');
          }
    });
  }


  const sum = function (a, b) {
    return new Promise((resolve, reject) => {
        if(!isNaN(a) && !isNaN(b)){
            resolve('Promise sum Executed');
            console.log("sum(1,3) =", a + b);
            
          }
          else{
              reject('a or b is not a number');
          }
    });
   
  };


  const max = function(a, b) {
    return new Promise((resolve, reject) => {
        if(!isNaN(a) && !isNaN(b)){
            resolve('Promise max Executed');
            if(a > b){
                
                console.log("max(8,6) =", a);
            }
            else{
                
                console.log("max(8,6) =", b);
            }
            
          }
          else{
              reject('a or b is not a number');
          }
    });
    
};

const avg = (a, b) => {

    return new Promise((resolve, reject) => {
        if(!isNaN(a) && !isNaN(b)){
            resolve('Promise avg Executed');
            const s= a+b;
            console.log("avg(1,3) =", s/2);
            
          }
          else{
              reject('a or b is not a number');
          }
    });
    
  };

  const executor = (resolve, reject) =>
   { const obj = {
    name: "Marcus Aurelius",
    split(sep = " ") {
      return this.name.split(sep);
    },
  };
  const check = true;

  if (check) {
    console.log("obj.split() =", obj.split());
    resolve(`Promise Object split executed`);
    
  } else {
    reject(`Object split throwed error`);
  }
};

const class_exec = (resolve, reject) =>
{ 
  class Person {
    constructor(name) {
      this.name = name;
    }
  
    static of(name) {
      return new Person(name);
    }
  
    split(sep = " ") {
      return this.name.split(sep);
    }
  }
  const person = Person.of("Marcus Aurelius");
  const check = true;

  if (check) {
    console.log("person.split() =", person.split());
    resolve(`Promise Class split executed`);
    
  } else {
    reject(`Object split throwed error`);
  }

};
  

  console.log( inc(5));
  console.log( sum(1, 3));
  console.log( max(8, 6));
  console.log( avg(8, 6));
  const promise = new Promise(executor);
  const promise_2 = new Promise(class_exec);
 
  

