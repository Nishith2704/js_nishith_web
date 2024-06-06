const coding = ["js","ruby","java","python","cpp"]
// here it is main 

// higher order
// coding.forEach(  function (item) {
//     console.log(item);
// }  )

// here sir told that  for each  takes (callback function )
 // first step:simply write the function within for each by neglet the ( ) of that
 // second step :remove the function name as is the callback method 
 // third step: within the parameter of the function add the iterable value any thing like in the privious 

 // use of hte arrow function
//  coding.forEach( (item) => {
//     console.log(item);
//  } ) 

//  // 

//  function printme (item){
//     console.log(item)
//  }
 
//  coding.forEach(printme()) // here we get the error as we only need to provide the refereace of it only
//  coding.forEach(printme)

// coding.forEach((item,index,arr)=> { // here all the time is not a item only one parameter , but it coint s index and array
// console.log(item,index,arr);
// })

// here it is the o/p for it 
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]

// array with objects
// like [{},{},{}]

const mycoding = [
    {
        langame : "javascript",
        langfile :  "js"
    },
    {
        langName : "java",
        langfile :  "java"
    },
    {
        langName : "ruby",
        langfile :  "rb"
    },
    {
        langName : "python",
        langfile :  "py"
    },
] // it is the very common method for taking the values from the database

mycoding.forEach(  (item) => {
    console.log(item.langName);
});