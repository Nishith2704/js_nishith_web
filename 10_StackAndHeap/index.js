// two types of memory Stack and Heap memory

//stack:in primitive we use the stack , we are provided with copy of datatype ex
 let myYoutubeName="Caffinated_Code"
 let anothername= myYoutubeName // here it orignally anothername is caffinatedcode but it primitive we are provided with the 
 // copy of the datatype hence 
 anothername="nish_bro"
 console.log(myYoutubeName);
 console.log(anothername);//hence the o/p of another name is changed to nish_bro

 //ex
  let user1={
    email:"user@google.com",upi:"user@ybl"
  }
  let user2=user1 //here we are provided the referance of user1 to user 2
  user2.email="nishith@google.com"// changes are made in user-2
  console.table(user1);// here we are printing user1 and user2 details
console.table(user2);
  // for the o/p we 


// heap:in non_primitive use the stack, we are provided with reference of datatype
// ┌─────────┬──────────────────────┐
// │ (index) │        Values        │
// ├─────────┼──────────────────────┤
// │  email  │ 'nishith@google.com' │
// │   upi   │      'user@ybl'      │
// └─────────┴──────────────────────┘
// ┌─────────┬──────────────────────┐
// │ (index) │        Values        │
// ├─────────┼──────────────────────┤
// │  email  │ 'nishith@google.com' │
// │   upi   │      'user@ybl'      │
// └─────────┴──────────────────────┘