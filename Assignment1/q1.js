// Q1. Create an object named student with the properties: name, age, course, 
// isEnrolled and city. Print the complete object, then print only the name and 
// course on a single line. Hint: 
// Use both dot notation (student.name) and bracket notation (student['name']) at least once.

let student={
    name: 'Tharani',
    age: 32,
    course: 'B.E',
    isEnrolled: true,
    city: 'Chennai'
 
};
console.log(student);
console.log(student.name, student['name'],student.course, student['course']);