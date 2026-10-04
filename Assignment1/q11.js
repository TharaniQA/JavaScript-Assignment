//Q11. Create an array users that holds 4 user objects (name, age, salary, isActive). 
// Using a simple for loop, print the name of every user whose isActive value is true.

let users=[
    {name: 'Tharani',age: 32,salary: 8.3,isActive:true},
    {name: 'Prem',age: 35,salary: 13.3,isActive:true},
    {name: 'Saras',age: 32,salary: 11.3,isActive:false},
    {name: 'Vishnu',age: 29,salary: 7.3,isActive:false}];

    for(let i=0;i<users.length;i++)
        if(users[i].isActive)
        {
            console.log(users[i].name);//Tharani, Prem
        }
