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


  const studentsWithStatus = students.map(student => {
  let status;
  
  if (student.marks >= 60) {
    status = "pass";
  } else {
    status = "fail";
  }

  return {
    ...student,
    status: status
  };
});

console.log(studentsWithStatus);
  

const namesWithCourse = students.map(function(student) {
  return student.name + " - " + student.course;
});

console.log(namesWithCourse);

const updatedMarks = students.map(student => ({
  ...student,             
  marks: student.marks + 5 
}));
console.log(updatedMarks);



const csStudents = students.filter(student => student.course === "Computer Science");
console.log(csStudents);


const above80 = students.filter(student => student.marks > 80);
console.log(above80);


const feesNotPaid = students.filter(student => student.feesPaid === false);
console.log(feesNotPaid);


const ageMarksCondition = students.filter(student => student.age > 20 && student.marks > 70);
console.log(ageMarksCondition);


const mechBelow85 = students.filter(student => student.course === "Mechanical" && student.marks < 85);
console.log(mechBelow85);


const TotalMarks = students.reduce((sum, student) => sum + student.marks, 0);
console.log(TotalMarks);


const totalmarks = students.reduce((sum, student) => sum + student.marks, 0);
const averagemarks = totalmarks / students.length;
console.log(averagemarks);


const countFeesPaid = students.reduce((count, student) => count + (student.feesPaid ? 1 : 0), 0);
console.log(countFeesPaid);


const highestMarks = students.reduce((max, student) => 
  student.marks > max ? student.marks : max, 
0);
console.log(highestMarks);


const groupedByCourse = students.reduce((group, student) => {
  if (!group[student.course]) {
    group[student.course] = []; 
  }
  group[student.course].push(student);
  return group;
}, {});


