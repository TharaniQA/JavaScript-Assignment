// Q8. Write a function updateCity(userObj, newCity) that 
// changes the city inside the object passed to it and does NOT return anything. 
// Call it with a user object and print the object AFTER the call.
//  Explain in a comment why the city changed even though nothing was returned.


let userObj={
name:"Tharani",
city:"Bangalore"
};
function updateCity(userObj,newCity)//the function changes the same object which was passed, so the original object is updated
{
userObj.city=newCity
}
updateCity(userObj,"Chennai")
console.log(userObj);