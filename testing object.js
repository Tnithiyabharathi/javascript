var checkObj = {
  gift : "pony",
  pet  : "kitten", 
  bed  : "sleigh"
};
  function checkObject(checkProp){
     if(checkObj.hasOwnProperty(checkProp))
     {
         return checkObj[checkProp];
     }else{
         return "Not Found";
     }
};
console.log(checkObject("gift"));  //pony