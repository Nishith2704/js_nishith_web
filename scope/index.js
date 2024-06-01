

// {
//     // it is scope for if ,else,condition  function is called that scope. i know that object declartion should start with {}
//     // but it is as it is
//     let a = 10;
//     console.log(a)
//     const b = 20;
//     var c = 30;
// }

 


// console.log(a);// we need the error,ReferenceError: a is not defined
// console.log(a);// we need the error,ReferenceError: b is not defined

// console.log(c);// o/p:30
// // this where concept of the scope is takes place



// nested scope
// here hitesh understands the topic by saying the young child could snach the icecream from older ones but for older it would be shameful to snatch the icecream from the younger ones

function one(){
    const userName="nishith"

    function two(){
        const website="youTube"
        console.log(userName);
    }
    //console.log(website);// no access  
     // as code execute the line by line as the above line give the error the next b( ) is never goona to be executed

    two()
}
//one()

if(true){
    const userName="nishith"
    if(userName==="nishith") {
        const website=" youtube"
        console.log(userName+ website)
    }
     // console.log(website); first error:referance
}
  //  console.log(userName);  seconde error:referance

//    ++++++++++++++++++++++++++++imp++++++++++++++++

// about simple hoisting
 
addtwo(2)
function addtwo(sum){
    return sum+1 // simple declartion of the function
}

console.log(addtwo1);
const addtwo1 = function(sum){
    return sum+1 // this is another type of the declaring the funtion , as it would hold the declartion and the intialization in this block

}


// when the function call takes place in the both methods it would execute the code normally
// when the second method is called even after the intialization of the variable called twoadd1 it would throw the error a
//Cannot access 'addtwo1' before initialization  only when consoling
