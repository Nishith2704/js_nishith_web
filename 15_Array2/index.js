const onepiece=["zoro","luffy","nami"]
const naruto=["naruto","sasuke","kakashi"]
// onepiece.push(naruto)
// console.table(onepiece[3][1]);

// for merging two string we use the concat

console.table(onepiece.concat(naruto));
console.table(naruto.concat(onepiece));
/*
│ (index) │  Values   │
├─────────┼───────────┤
│    0    │ 'naruto'  │
│    1    │ 'sasuke'  │
│    2    │ 'kakashi' │
│    3    │  'zoro'   │
│    4    │  'luffy'  │
│    5    │  'nami'   │*/

const all_new_protaginst =[...onepiece,...naruto] //(... imp )
console.table(all_new_protaginst) // it is the concept of the spread that we use normally 
// and also we can use multipel concatenation yayyyyy 
const another_array=[1,2,3,[4,5,6],7,[6,7,[5,3]]]
const real_another_array=another_array.flat(Infinity)
console.table(real_another_array);// for making everthing in single array
// here we are provided with the deapth for deep deapth bro we can use the gojo domain

// for datascraping -> (converting into array)     node list ,object => array
console.log(Array.isArray("nishith"))
console.log(Array.from("nishith"))
console.log(Array.from({name:"nishith"})) // as it would get confused what to make to an array either key or value
// for this is  0/p:[]
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)); // here it use for multiple elements to assgined into the array




