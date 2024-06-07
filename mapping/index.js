// //const coding =["js","ruby","java","python","cpp"]

// // const value=coding.forEach( ( item) => {
// //     console.log(item);
// // } )
// // console.log(value)
// // as we try the code to store it into the some variable and then print
// // 
// // js
// // ruby
// // java
// // python
// // cpp
// // undefined
 
// // as here it has printed undefined bcs the function forEach is return nothing 
// // even after if we write the return the item,undefined

// // the problem is there is resolved
// const myNums1 = [1,2,3,4,5,6,7,8,9,10]

// let newNums1= myNums1.filter(  (num)=> num>4 )
// console.log(newNums1); 
 const myNums = [1,2,3,4,5,6,7,8,9,10]

// let newNums= myNums.filter(  (num)=> {
//        return num>4
// } )
// console.log(newNums); // for this example we get [] empty 
// // filter we have the call back function we had to proivide the condition 

//   // for each

  const newNums=[]
  myNums.forEach( (num) => {
    if(num >4){
        newNums.push(num)   // here also for each it works perfectly
    }                       // here the push is push item into array
  })
 
  console.log(newNums);
  


  












