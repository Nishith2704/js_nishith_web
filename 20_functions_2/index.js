function calculateCartPrice(val1,val2,...num1){ // interview point of view val1, val2, ...   // ... this is called rest and spread opeator
    return num1 // for shopping cart user add number of items as parameter has to be handled
} // when passing mulitple arugments in paramt

console.log(calculateCartPrice(200,400,500)) //for many value // and return array for ...
// for val1, val2 are 200,400 and rest the value are in the ... => array form

const user={
    userName:"nishith",
    prices:"199" // creation of object user
}
function handleOjbect(anyObject/*this is any object*/){
    // function does not know whether user is come,it could be a name ,api is come as it only depend on the any object
    console.log(`UserName is ${anyObject.userName} and price is ${anyObject.prices}`);
}

// passing the object inside the function
handleOjbect(user)
// problem arise  when  we write price to prices.. It would provide the undefined for it
//  for typescipt type cheking  takes place


// here in this example we diretly pass the object
handleOjbect({ 
    userName:'nishith',
    price :399
})



// passing array into functions
const myNewArray = [200, 500, 600, 700]

function returnSecondValue(/*passing the array*/getArray){
    return getArray[1]  // we should not write the myNewArray[1], but what the parameter that we had be provided the funtions

}

console.log(returnSecondValue(myNewArray)); // o/p:500
console.log(returnSecondValue([200, 400, 500, 1000])) // o/p:400