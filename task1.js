function zeroToTen(num1,num2){
    if(num2 < num1){
        return [];
    }else{
        const number = zeroToTen(num1, num2 - 1);
        number.push(num2);
        return number;
    }
}
console.log(zeroToTen(0,10));
//0,1,2,3,4,,5,6,7,8,9,10