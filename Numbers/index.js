// const number=1000;
// const number1=new Number(12345.259); // here both number are same but in console it would show some function recommendation regarding to the numbers
// console.log(number);
// console.log(number1);
// // o/p:  1000
// // [Number: 12122]
//             // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//             // some operating regarding number

// console.log(number1.toString().slice(2,3)); // here first the number is converted into the string then following string operation is take down
// console.log(number1.toFixed(2)); // here the funtion would take value i:e number to which  the give decimal value is round offed (ex:1222.354=>1222.35 if (2 is mentioned))
// console.log(number1.toPrecision(5));// from where the precision is going to take i:e 12345 for (5)

 // about Math function 

console.log(Math.random()); // here it would generate the within 0 to 1 range
const min=10
const max=20
console.log(Math.floor(Math.random()));
console.log((Math.floor(Math.random()*(max-min+1)))+min)