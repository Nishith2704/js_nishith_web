// we call it has iterators aka loops

// basic is for

for (let i = 0; i <= 10; i++) {
    const element = i
    if(element == 5){
        console.log(`${i} is the best`);
    }
}
// console.log(element);//ReferenceError: element is not defined
/* in this for loop we had learned  (intialization;condition;iteration)
first declartion takes for one time only then it check the 
condtion if it satisfy then it enter into scope 
before reaching the end scope the increament on index takes place
*/

for (let i = 0; i <=100; i++) {
    ///console.log(`outer loop value :${i}`);
    for (let j = 0; j <=1000 ; j++) {
       //console.log(`Inner loop value :${j} and inner loop ${i}`);
       // console.log(i + '*' + j + " =" + i*j) ;
    }
}

let MyArray = [ "goku" , 'vegeta' , "luffy"]
console.log(MyArray.length);
for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    console.log(element);
    
}


// keywords

//  which are break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
        break // control flow ko break kartha he jump to line 48
        
        
    }
   console.log(`value of ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`detected 5`);
       continue

        
    }
   console.log(`value of  i is ${index}`);
    
}
