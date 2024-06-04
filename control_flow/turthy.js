const userEmail =   "n@nishith.ai"// true // if it dont have the any value then it return the false value
const usermail  =  ""// false
const userlist  =[] // true
if (userlist/* here defualt the value of it's consider to be true*/) {
    console.log("got user email");
}
else {
    console.log("dont't have user email")
}

// these are truthy value

// flasy values

/*1)false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN


  2)true , "0" , 'false' , " " , [ ] , { } , function(){} //imp 

  */

  if (userlist.length === 0) {
    console.log("array is empty");
  }

  const emptyobj ={}

  if (Object.keys(emptyobj).length===0) {//which would return array
    console.log("object is empty");
  }

  // Nullish coalesing operator (??) : null undefined

  let val1; 
  val1 = 5 ?? 10   //5
// for database  it's useful
  val1 =null ?? 10 // 10
  val1 =undefined ?? 15
  val1 = null?? 10?? 15  //10 
// value assign for it

//ternary operator:

// condition ? true :false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");;


  console.log(val1);


 