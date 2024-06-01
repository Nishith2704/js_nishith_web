

{
    // it is scope for if ,else,condition  function is called that scope. i know that object declartion should start with {}
    // but it is as it is
    let a = 10;
    console.log(a)
    const b = 20;
    var c = 30;
}

 


console.log(a);// we need the error,ReferenceError: a is not defined
console.log(a);// we need the error,ReferenceError: b is not defined

console.log(c);// o/p:30
// this where concept of the scope is takes place