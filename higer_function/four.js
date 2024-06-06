const myobject ={
    js :    'javascript',
    cpp : 'c++',
    rb : "ruby",
    swift :"swift by apple"
}
 
// for this we use the for in loop  this is not only describe for the object early mention 


// for-in

for (const key in myobject) {
  console.log(`${key} shortcut if for ${myobject[key]}`);
  
}
// it would print the only key value only like  js ,cpp , rb , swift

// for to get the object we use objname[key_name]


// it could work on the array???

const programming = ["js",'rb',"py","java","cpp"]
console.table(programming)
/* 
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │  'js'  │
│    1    │  'rb'  │
│    2    │  'py'  │
│    3    │ 'java' │
│    4    │ 'cpp'  │
└─────────┴────────┘ */

for (const key in programming) {
    console.log(programming[key]);
}

// in map we cannot ittreable on for in  case but it can in detail