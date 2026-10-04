// Q10. Create an object testSuite with suiteName and an array property 
// testCases that holds three test case objects (each with id, title and status).
//  Print the title of the second test case and
//  the total number of test cases. 
//  Hint: testSuite.testCases[1].title

let testSuite={
suiteName: ' Login',
testCases: [{id:1,title:'valid',status:'Pass'},
    {id:2,title:'invalid',status:'fail'},
    {id:3,title:'Emptypwd',status:'pass' }
]};
console.log(testSuite.testCases[1].title);
console.log(testSuite.testCases.length)