// for-of loop
// these are the array based loop

// [{},{}]

// const array =[1,2,3,4,5,6]
// // kindy ajust

// // iterator is simply i
// // for -of loop
//  for (const val of array ) {   // here the suggestion of object is not the object refering to the js but it is the language referance 
//    console.log(val);
//  }


//  const Greetings = "hello world"
// for (const  greet of Greetings) {
//     if(greet == " ") continue;
//     console.log(`each charator is ${greet}`)
// }

// another datatype

//maps: it just like array but it is in iteration
// explaination , the map hold the obejects which cointain the key value pair and also remembers the original 
// insertion order of the keys 

const map =new Map()
map.set('IN',"India")
map.set('USA',"United states of America")
map.set('jap',"Japan")
console.log(map);
/*
      Map(3) {
  'IN' => 'India',
  'USA' => 'United states of America',
  'jap' => 'Japan'
}
*/ // this is the o/p for the map function but the main role of this function is the 
// it address the  unique value 
// example
//  const map1 = new Map()

//  map1.set('India',+91)
//  map1.set('japan',+211)
//  map1.set('Russia',+41)
//  map1.set('India',+0o1)
//  console.log(map1);  // in this example we not seen the India repeating twice
 
 // how to applay the for all loop  in the map


 for (const mappy of map) {
    console.log(mappy);
 }
// as it would print the whole array we wanna to destruct the array for that 
// we use the

const map3 =new Map()
map3.set('hello','namaste')
map3.set('out','bahar')
map3.set ( 'up', 'upper')
 // for this to be destruct we need to include the []
for (const [mapp,value] of map3) {
    console.log(mapp,":=",value);
 }

 // this is the destruture of the array


 // for of for object

 const myobject = {
    "game1" : "NFS",
    "game2" :   "spiderman"

 }
 for (const [key,value] of myobject) {
    console.log(key , ":=" , value);  // for this we get the error that the given my object is not iterable

 } // from this we conculude we had many methods for avaliable


 