// // if-statment

// if (/*it has to be true*/Infinity){
// // to enter into the code 
// }
// if(false ){
//      // it does not execute
// }
// //basic condition
// const inUserLoggedIN=true
// if(inUserLoggedIN){

// }

// //we have  some comparssion operator
// /* ( < , >, <= ,  like 2<2 i:e false but 2<= check both condition)
// =, is assign but == is equivalent  != i:e 3!=2 obvisouly true
// we have another  === , tripe= i:e strick cheking,  it is used to check the date type
// */
// if(2=="2"){
//     console.log("executed"); // here this line would be executed 
// }
// // but for the strictly exection we use
// if (2==="2"){
//     console.log("executed");
// }
// else{
//     console.log("not exected becuase the upper ones is strict i:e is using the ===");
// }

// const temperature = 41
// if(temperature===41){ // for strictly ===
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }

// const score =200

// if( score>100){
//     let power ="fly"
//     console.log(`User Power:${power}`); // here the code execute normmaly but problem arise when we copy the if log statment in out-side if
// }
// console.log(`User Power:${power}`);// due to scope 

// shorend notation

const balance =1000

// if(balance>500) console.log("test"),// as to write this method in next line we use the comma
// console.log("test2"); // but it is unreadable not a good pratice

// // nesting ( for multiple condition)
//  if(balance < 500) {
//     console.log("less_than");
//  }else if(balance <750) {
//     console.log("less than 750");

//  }else if (balance <900){
//     console.log("less than 900");

//  }
//  else{
    // console.log("less than 1200");
//  }
const userLoggedIn=true
const debitCard =  true
const LoggedInFromGoogle =false
const LoggedINFromEmail  =true
const guestUser = true
if(userLoggedIn && debitCard && 2==3){ // logical operator
    console.log("allow to buy course");
}
if(LoggedINFromEmail || LoggedInFromGoogle || guestUser){
    console.log("user logged in");
}
