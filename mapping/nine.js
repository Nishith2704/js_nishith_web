// // reduce

// // reducer key word in react 

const myNums =[1,2,3]

// const myTotal=myNums.reduce(  function (acc,curval){
//     console.log(`acc:${acc},and curval is ${curval}`);
//     return acc + curval
// },276)
// // here the accumalator used in shopping cart
// console.log(myTotal); // 6


// in arrow 

const mytotal = myNums.reduce( (acc,curr) => {
    console.log(`the acc  is ${acc} and the curr is ${curr}`);
   return   acc+curr
}, 0)

console.log(mytotal);


const shoppingCart = [
    {
        itemName: "js course",price : 2999
    },
    {
        itemName: "python course",price : 999
    },
    {
        itemName: "mobile  course",price : 22999
    },
    {
        itemName: " dsa course",price : 12999
    },
]

// basic common method for this is used to reduce
const  pricetopay=shoppingCart.reduce( (acc ,item ) => 
{
 return acc+item.price
},0)

console.log(pricetopay);