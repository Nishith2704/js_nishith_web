// primitive

// 7 types :String ,Numver, Boolean, null,undefined,Symbol,BigInt

//non-primitve or referance type

//Array , Objects , functions
 
// const score=100

//defining the symbol 
const id=Symbol('123')
const anotherid=Symbol('123') // 
let a=100000n
console.log(id===anotherid); // here the ReturnType is different in both case
console.log(typeof(a)) // for declaration of the bigInt we use the "n" in the end of the integer

const heroes =["gojo","luffy","zoro"];

let myobj ={
    name:"nishith",
    age:22,
}
 
const myfuntion =function (){
console.log("hello world");
}
console.log(myfuntion);
console.log(typeof(myfuntion)) // for null the datatype would be Object (function is also called funtion object)
console.log(typeof(myobj));  // object
console.log(typeof(heroes));// objectcccccccccccccc
