// about declartion on date on jan 1 1970 from there js is runned 

//date
 let myDate= new Date()
  console.log(myDate);//here we make conversion
//  // we try to make for string
  console.log(myDate.toString())
 // o/p:Tue May 28 2024 11:26:48 GMT+0530 (India Standard Time)
 console.log(myDate.toISOString());
 // 2024-05-28T06:04:05.032Z
 console.log(myDate.toJSON());
 // 2024-05-28T06:04:05.032Z
 console.log(myDate.toLocaleDateString());
 // 28/5/2024
 console.log(myDate.toLocaleTimeString());
 // 11:34:05 am
 console.log(myDate.toLocaleString());

 //here it is an object for timee!!!(interview)

//for spefic date
  
let myNewDate=new Date(2024,0,23,5,3,45)
console.log(myNewDate.toDateString());// here 0 means month start from jan
console.log(myNewDate.toLocaleString());
// 23/1/2024, 5:03:45 am
// here different types of declaring the dates in js
 let Din =new Date("2023-01-14")
 console.log(Din.toLocaleString());
 let DIndia=new Date("02-14-2024")
 console.log(DIndia.toLocaleString());



 // time stamp is used for designing the polls, quizes,
let myTimeStamp=Date.now() 

console.log(myTimeStamp);
console.log(Din.getTime());
console.log(Math.floor(Date.now()/1000));// FOR mill -> sec
//floor or round to round off

// more about funtion on date

let newDate=new Date(12,12,2)
console.log(newDate.getMonth()+1);
console.log(newDate.getTime());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());

//  1)4
// 2)1716877923254
// 3)2024
// 4)12
// 5)3
// 6)254

//string interpolation means using the back tics `

console.log(`${newDate.getDay()}and the time is ${Math.floor(newDate.getTime().toString())}`);

console.log(newDate.toLocaleString('changed',{
    weekday:"long"
 
}));

 