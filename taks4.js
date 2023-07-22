//write a function takes an object as argument and print all keys:

function obj(){
    let person = {
      name : "Nithya",
      age : 22,
      favcolor : "Pink"
    } 
      for(let key in person)
      {
      console.log(person[key]); 
      }
    }
    obj();

    //Nithya
    //22
    //Pink
