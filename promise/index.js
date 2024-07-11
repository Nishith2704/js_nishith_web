// let promiseHead = new Promise(function(resolve,reject){
//    // application it use for the async  task and db calls ,crytography ,network calls 
//    setTimeout(function(){
//     console.log('async task is complete')
//     resolve();
//  } ,1000)
//  // for linking the given (((resolve and then  !!!))) we use the 
    
//    })
//    //to consume the given promise we need to use 
//    promiseHead.then(function(){
//     console.log("here  your promise ") // hold back

//    })
// // here the second part of declearing the promise 
 
//  new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("the process is terminated in the given setTimeout()")
//         resolve()
//     },2000)
//  }).then(function(){
//     console.log("this 2nd part of promise is executed")
//  })

// // third type of promise includes the data restoring from resole-> then 

// promiseThird = new Promise/*callback*/(function (resolve,reject){
//     setTimeout(function () {
//         console.log("loading the data");
//         resolve({userName:"nish",email:"nish@gmail.com"}) // after time out and also resolve then data in api is exected
    
//     }, 2000);
// })

// promiseThird.then(function(user){ // here is the accessing part of the the given function is taken by user

//     console.log(user)
// })// from 

// promise four

// let promise4 = new Promise(function(resolve,reject){
//      error=true
//     setTimeout(() => {
//         if(!error){
           
//             resolve({Ename:"nishith",Email:"nish@google.com"})
            
//         }
//         else{
//             reject("something went wrong")

//         }
       
//     }, 10000);
// })

// promise4
// .then((user)=>{
//     return user.Ename
// })
// .then((Ename)=>{
//     console.log(Ename)
// })
// .catch((error)=>{

//     console.log(error)
// })
// .finally(()=>{
//     console.log("the promise is either resloved or rejected")
// })

// while executing the code it would give

let promise5 = new Promise((resolve,reject)=>{
 let error =false
 setTimeout(() => {
    
     if(!error){
        reject('Error has been occured')
     }
     else{
        resolve({E_name:"sagar",E_id:"e20001"})
     }
 }, 2000);
})
// async function hello(){
// try {
//     const response= await promise5
//     console.log(response)
    
// } 
// catch (error) {
//     console.log("eroor in the data")
// }
// }
// hello()



async function getAllUsers(){
    try {
        
        const response=await fetch('https://jsonplaceholder.typicode.com/users') // here it is in string
        const data= await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
getAllUsers()
//same for writing in the normal above lines 
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(data){
    return data.json
})
.then(function(e){
    console.log(e)
})
.catch(function(e){
    console.log(e)
})