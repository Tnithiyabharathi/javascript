let count = 0;

function cc(card) {
  // Only change code below this line
 if (card >= 2 && card <= 6) {
    count++;
  } else if (card === 10 || card === "K" || card === "Q" || card === "J" || card === "A") {
    count--;
  }
   console.log(count);
   //if(count > 0){
   //     return count + " Bet";
   //  }else{
   //     return count + " Hold";
   //  } 
return count > 0 ? count + " Bet" :count + " Hold";
  // Only change code above this line
}
 
cc(2); cc(3); cc(7); cc('K'); cc('A');