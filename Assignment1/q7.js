// Q7. Predict the output of the code below.
//  Explain in one line why the two console.log statements print
//  what they print. 
// let cart = { items: 2, total: 500 }; 
// let copy = cart; 
// copy.items = 5;
// console.log(cart.items); //5
// console.log(copy === cart);

 let cart = { items: 2, total: 500 }; 
let copy = cart; 
copy.items = 5;
console.log(cart.items); //5
console.log(copy === cart);//true