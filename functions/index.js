// use of the functions
 // for the use of some function(or block of code)
 // which has to be used repeately in code

 function myName(){
     console.log("n")
     console.log("i")
     console.log("s")
     console.log("h")
     console.log("i")
     console.log("t")
     console.log("h")
     return
}
// console.log(myName) //[Function: myName] referance
// console.log(myName())// exection part  

function addTwoNumber(number1,number2){
    //method_1
    return number1+number2;
    
}
//console.log( typeof  add( add,2));// for this it would be String type of

console.log(addTwoNumber(2,3));//NaN =>not a number, addTwoNumber(argument)
//if in quotes
 console.log(addTwoNumber("2",5));//25

 console.log(addTwoNumber(3,"a"))  //3a
 console.log(addTwoNumber(3,null))  // 3

 // we can store the function in variable
 const result= addTwoNumber(3,5)
 console.log("result",result);

 // the role of return is useful bcs it would return a value and also terminate the code at that time
 // after return the code would throw unreachable code

 // intro of scope

 function loginUserMessage(username){
    if(username===undefined) // most codebase we use !username
        {
            console.log("enter the username")
            return
        }
    return `${username} just loggedIn`
 }
//  console.log(loginUserMessage("Nishith"));// most of dev would make mistake by writing only the function but they dont store them in the value
console.log(loginUserMessage());