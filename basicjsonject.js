//object in js

let dog = {
    name: "daisy",
    numLegs : 4
    };

//dot natation to access the property of object:
 
let dogs = {
    name: "Spot",
    numLegs: 4
  };
  // Only change code below this line
  console.log(dogs.name);
  console.log(dogs.numLegs);
  

  //create method on object : 
  let dogss= {
    name: "Spot",
    numLegs: 4,
  sayLegs : function() { return"This dog has "+ dogss.numLegs +" legs."}
  };
  
  dogss.sayLegs();