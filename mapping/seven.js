const myNumbers = [1,2,3,4,5 ,6, 7,8,9 ,10]
// // for the sensei map is better than for each 
// const newnums=myNumbers.map(  (num) => num+10  )
// console.log(newnums);  // as map would not provide the undefined to it

// // [
// //     11, 12, 13, 14, 15,
// //     16, 17, 18, 19, 20
// // //   ]

// const newNum=[]
// const fore = myNumbers.forEach ( (num)=>     // basically here we get the function which would return the undefined for all time 
//     {return console.log(newNum.push(num+10)) } )  // for that reason we had declared the new array empty var to avoid undefined in it
// console.log(  newNum);


// chaning method  

const newNums = myNumbers.map(  (num)=> num*10 ).map((num) => num+1).filter((num) => num>40)
console.log(newNums)

//      [
//  11, 21, 31, 41,  51,
 // 61, 71, 81, 91, 101,