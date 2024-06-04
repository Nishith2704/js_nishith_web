// Immediately invoked Functions Expressions(IIFE


// 1 st query is that we what some function which has to run immeditaly
// for a given reason database connetion in file, and also the we want function not to access variable outside the functino i:e global scope

(function Nishi(){
    console.log(`DB is connected`);
})(); //********************;;;;;;********** IMPPP */

// for to invoke immmediatly , we write IIFE
// the main use of IIFI is to reduce the global scope pollution in interview point of view

// () () for defination , and execution 

( (name)=>{
    console.log(`Db is connected two ${name}`);// firstly it would provide the error
}) ('nishith')
// for this arrow to be exectute we need to use? wait had you put ; on privous IIFE if no we need to put ; for the stop the context for in js and need to end it for it we use the ;
// arrow function is still runss 

//namee IIFE : line 7
//unnamed IIFE : line 16



