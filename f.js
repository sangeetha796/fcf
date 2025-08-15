const students = [
 { id: 1, name: "Amit Sharma", age: 20, course: "Computer Science", marks: 85, feesPaid: true },
 { id: 2, name: "Priya Singh", age: 22, course: "Information Technology", marks: 92, feesPaid: false },
 { id: 3, name: "Ravi Kumar", age: 19, course: "Electronics", marks: 76, feesPaid: true },
 { id: 4, name: "Neha Verma", age: 21, course: "Mechanical", marks: 88, feesPaid: true },
 { id: 5, name: "Sohan Lal", age: 23, course: "Civil Engineering", marks: 65, feesPaid: false },
 { id: 6, name: "Anjali Mehta", age: 20, course: "Computer Science", marks: 95, feesPaid: true },
 { id: 7, name: "Vikas Gupta", age: 22, course: "Information Technology", marks: 58, feesPaid: false },
 { id: 8, name: "Pooja Mishra", age: 19, course: "Mechanical", marks: 80, feesPaid: true },
 { id: 9, name: "Rajesh Khanna", age: 21, course: "Electronics", marks: 70, feesPaid: false },
 { id: 10, name: "Sneha Kapoor", age: 22, course: "Civil Engineering", marks: 90, feesPaid: true }
];

const names = students.map(student => student.name);
console.log(names);



const nameCourseArray = students.map(student => ({
  name: student.name,
  course: student.course
}));
console.log(nameCourseArray);



const studentsWithStatus = students.map(student => ({
  ...student, 
  status: student.marks >= 60 ? "Pass" : "Fail" 
}));
console.log(studentsWithStatus);


const nameCourseStrings = students.map(student => ${student.name} - ${student.course});
console.log(nameCourseStrings);


const updatedMarks = students.map(student => ({
  ...student,             
  marks: student.marks + 5 
}));
console.log(updatedMarks);
