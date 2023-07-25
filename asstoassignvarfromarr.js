const a = 6,b = 9;
console.log(a,b);
//6,9

let d= 5;  e = 3;
//swap 
[d,e] = [e,d];
console.log(d,e);

const [x,y,z] = [3,5,6];
console.log(x,y);
//3,5

const [A,B,,, C] = [1,2,3,4,5,6];
console.log(A,B,C);
//1,2,5