// Q5. Create an object testCase with id, title, priority and status.
//  Write code that checks if the property executedBy exists in the object.
//   If it does not exist, add it with your name. 
// Then print the object. Hint: Look up the 'in' operator and hasOwnProperty().
let testCase={
    id:101,
    title:'Training',
    priority:'Medium',
    status: 'Active'
};
console.log(testCase);
console.log('executedBy' in testCase);
if (   !(  'executedBy' in testCase))
    {
        testCase.executedBy='Tharani'
    }

console.log(testCase);