// how singlton

// const tinderUser=new Object()// it is singleton
const tinderUser={}  // it is not a singleton
tinderUser.id="123abc"
tinderUser.name="nishy"
tinderUser.isLoggedIN=false
// console.log(tinderUser)
const regularUser={
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"nishith",
            lastName:"acharya"
        }

    }
}
console.log(regularUser.fullName.userFullName.lastName);
// in project we often use the ? that is use for the prediction purpose
// i:e regularUser.fullName?.userfullName.firstName);


//about merging of the objects method 
// it return a modified object
// the syntax would be (Object.assign(target,source))
 // for pratice we use (Object.assign({as target},a,b,c))
    const obj1 =  {2:"a",1:"b"}
    const obj2 =  {3:"a",4:"b"}
    const obj4= {"hello":"a",8:"b"}
const obj3=Object.assign({},obj1,obj2,obj4)
// and assign would rearrange the order of object that is the modified ones
// { '1': 'b', '2': 'a', '3': 'a', '4': 'b', '8': 'b', hello: 'a' }
 console.log(obj3);

 //but more one is 
 const obj7={...obj1,...obj2,...obj3,...obj4}// it spread concept
 console.log(obj7);// 90% we use

// how about the data from the database?
const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    
] 
users[1].email // here the it's about the the data_base the array list of objects are provided that we need to find the value in them
console.log(tinderUser);
console.log(Object.keys(tinderUser));// here the o/p is provided in the format of array
console.log(Object.values(tinderUser));// here the o/p is provided in the format of array
console.log(Object.entries(tinderUser));// low use 
console.log(tinderUser.hasOwnProperty('isLoggedIN'));// it is used to check whether for a given object the key is present there or not for not to crash purpose



// console.log(tinderuser);