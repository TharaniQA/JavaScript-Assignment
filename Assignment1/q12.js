// Q12. Build a small 'Test Result Report' object. It must contain: projectName, environment,
//  a summary object (total, passed, failed, skipped) and an array failedTests of 
//  test names. Then: 
//  • Print the pass percentage (passed / total * 100) rounded to 2 decimals 
//  • Add a new property executionDate with today's date as a string 
//  • Update failed count by 1 and push one more test name into failedTests
// • Delete the skipped property and print the final object 
// Hint: Number.toFixed(2) helps with rounding.

let testResultReport={
    projectName:'Dell',
    environment:'QC',
    summary:
    {
        total: 50,
    passed: 30,
    failed: 15,
    skipped: 5
    },
    failedTests:['test1', 'test2', 'test3','test4']


}
let passPercentage=(testResultReport.summary.passed/testResultReport.summary.total *100);
console.log(passPercentage.toFixed(2));
testResultReport.executionDate='03/10/2026'
console.log(testResultReport);
testResultReport.summary.failed=(testResultReport.summary.failed+1)
console.log(testResultReport);
testResultReport.failedTests.push('test5')
delete testResultReport.summary.skipped
console.log(testResultReport);
