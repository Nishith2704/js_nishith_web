//2015 es6 in arrow function was introduce and also this was introduced

const user = {
    userName: "Nishith",
    price:999,

    welcome:function() {
         console.table(`${this.userName},welcome to the course`);

          console.log(this) //
          // context : kis ke bare me bath kare
        //  this keyword it used to refer the current context
    }

}
// user.welcome()
// user.userName="yash"
// user.welcome()
//  o/p:{ userName: 'Nishith', price: 999, welcome: [Function: welcome] }
/*yash,welcome to the course
{ userName: 'yash', price: 999, welcome: [Function: welcome] } */     
console.log(this) //    o/p:{} in node the o/p is this

// but for the console in the browser it could be the Window object most imp part for the interview



// arrow function

function chai(){
    let userame ="nishith"
    console.log(this.userame); // print undefined as this  would use in the object only not in function but it is need when we  use the dom manupulation

}
chai()

// as it would print a list of.......
/*<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
} */

// ******************** === ***************

 // arrow function
  const caffinated_bro = () =>  {
    let userame ="nishith"
    console.log(this.userame);  // not this
  }

//   caffinated_bro()

const addTwo=(num1,num2)=> {
     return num1+num2
}
 console.log(addTwo(2,5)) // op :7

 // another way of writing a arrow function
  // implicit return in which , we remove both the paranthesis,and also remove the return
const addTwo1=(num1,num2)=>   num1+num2
// if this confuse upper one then 
const addTwo2=(num1,num2)=> (num1+num2) // no need to use the return keyword , this is very useful when we are using the react!!!!!!!!!!!!!!!!
// what is the use of the (), wkt that the for the simple expresion we would write the whole equ in line , but for writing the object we should enclose with the ()
 const addtwo3=(num1,num2)=> ({username:"nishith"})
console.log(addTwo(2,5))
 console.log(addTwo2(3,5)) 
 console.log(addtwo3(2,3));
 // first we get undefined, here object would not get returned
// but we enclose whole in () we get nishith

// help for loop

const myArrary=[1,2,3,4,5,7]

myArrary.forEach(element => {
    console.log(myArrary.length)
});


