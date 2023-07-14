function numberText(val){
  const lookup = {
    1 : "One",
    2 : "Two",
    3 : "Three",
    4 : "Four",
    5 : "Five"
  };
  return lookup[val];
};
console.log(numberText(3));




function matchingFruit(color){
  const lookup = {
    "Yellow" : "Banana",
    "Red" : "Apple",
    "Orange" : "Orange",
    "Green" : "Grapes"
  };
  return lookup[color];
};
console.log(matchingFruit("Red"));





function matchingFruits(color){
let result = " ";

const lookup = {
  "Red" : ["Apple", "Pomegranate"],
  "Yellow" : ["Mango","Banana"],
  "Green" : ["Grapes", "Guova"]
};
  result = lookup[color];
 return result;
 
}
console.log(matchingFruits("Yellow"));



/*   const match = "Yellow";
     const matchValue =lookup[match];
     console.log(matchValue);
*/
