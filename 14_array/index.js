// array

const myArr= [0,1,2,3,4,5]// it would  any combination in any order 
//elements in single variable
//array can be resizeable in js
// in interview 
//shallow copy : it like pointing to same reference point as not providing the copy of var
// deep copy: as it not share the same reference

// another type of declartion:
const myArr2=new Array(1,2,3,4,5,"luffy_Nishith")
console.log(myArr2[5]);

// array methods
myArr.push(6)
myArr.push("luffy")
myArr.push("lucci")
myArr.pop()

// myArr.unshift(0) // it is not a good practice due to 
/*
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│    0    │    0    │
│    1    │    0    │
│    2    │    1    │
│    3    │    2    │      
│    4    │    3    │
│    5    │    4    │
│    6    │    5    │
│    7    │    6    │
│    8    │ 'luffy' │
└─────────┴─────────┘
     due to the whole index had been changes
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│    1    │    1    │
│    2    │    2    │
│    3    │    3    │
│    4    │    4    │
│    5    │    5    │
│    6    │    6    │
│    7    │ 'luffy' │
*/
myArr.shift() // remove value 0
console.table(myArr);

console.log(myArr.includes(3)); // typeof this return  boolean
console.log(myArr2.indexOf("luffy_Nishith")) // for this  index of item provided would return 

const newArr= myArr.join() 
// it would also bind the array also converting them into a string

console.log(typeof newArr);

//imp slice and splice 

//slice 

console.table("a",myArr);
const myn1=myArr.slice(1,3)
console.table(myn1);
console.table(myArr) 

/*       a
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │   1    │
│    1    │   2    │
└─────────┴────────┘
┌─────────┬────────┐
├─────────┼────────┤
│    0    │   0    │
│    1    │   1    │
│    2    │   2    │
│    3    │   3    │
│    4    │   4    │
│    5    │   5    │
└─────────┴────────┘*/

//splice

console.log("b",myArr)
const myn2=myArr.splice(1,3)
console.table(myn2)
console.table(myArr)

/*      b [ 0, 1, 2, 3, 4, 5 ]
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │   1    │
│    1    │   2    │
│    2    │   3    │
└─────────┴────────┘
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │   0    │
│    1    │   4    │    the point to view that the alteration made in the original would made change to the original array
│    2    │   5    │
└─────────┴────────┘
*/


