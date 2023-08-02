//set constructor property when changing the prototype

function Dog(name) {
    this.name = name;
  }
  
  // Only change code below this line
  Dog.prototype = {
   constructor: Dog,  //added
    numLegs: 4,
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };

  