// singleton :consturot taking one as object 
// declaring the object can be done with the two way one is literal and another  construtor
// objects literals
Object.create   // this is construtor method from this sigleton is made
// in object we encounter keys and value concept
const [mySym]=("key1")
const JsUser ={
    name:"nishith","full Name":"nishith_S" // for key js automatically consider name=>"name"
    ,age:18, mySym:"mykey1",//here what the symbol is . refer line 22
    location:"karnataka",
    email:"nishith@google.com",isLoggedIn:false,lastLoginDays:["monday","Saturday"]
}  //{} this is object

// accessing objects

// there are few methods
console.log(JsUser.name) // this is old method
console.log(JsUser["name"])// here " " why means it's is considering it has a  string
console.log(JsUser["full Name"]);
// intro of symbol
console.log(JsUser.mySym);
console.log(typeof JsUser[mySym]);// but the o/p is String we need  symbol
// for correct way to write  symbol we use .refer above line

//chaning the value
 JsUser.email="nishith@chatgpt.com"
 //Object.freeze(JsUser) // it is used to freeze the keys as the changes made would to reflect to new ones
 JsUser.email="nishith@nintendo.com"
 console.log(JsUser);
/*
    name: 'nishith',
  'full Name': 'nishith_S',
  age: 18,
  mySym: 'mykey1',
  location: 'karnataka',
  email: 'nishith@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'monday', 'Saturday' ]
  */
 //writing the function

 JsUser.greeting=function(){
    console.log("hello Js User");
 }
 JsUser.greeting2=function(){
    console.log(`Hello Js user,${this.name}`);// primarly this is used here for the pointing to the same object
 }
 console.log(JsUser.greeting); // op:[Function (anonymous)]
 console.log(JsUser.greeting()) //undefined
 console.log(JsUser.greeting2()) // Hello Js user,nishith

   //note we regulary use the . operator for accessing the objects but occansionly we use the [] for some interview point of view
   


