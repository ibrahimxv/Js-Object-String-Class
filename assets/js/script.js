/// TASKS ///

// 1) //
// class Math{
//     constructor(number){
//         this.result = number;
//     }

//     plus(number){
//         this.result += number;
//         return this;
//     }
//     minus(number){
//         this.result -= number;
//         return this;
//     }
//     multiply(number){
//         this.result *= number;
//         return this;
//     }
//     divide(number){
//         this.result /= number;
//         return this;
//     }
// }

// var result = new Math (50)
//     .plus(6)
//     .minus(30)
//     .multiply(3)
//     .divide(2)

// console.log(result.result);


// 2) //
// let numbers = [10, 50, 30, 40, 20];
// numbers.sort();
// console.log(numbers);



// 3) //

// function returnArray (str)
// {
//     return str.split(" ").map(word => word.length);
// }
// console.log(returnArray("Salam necesen"));


// 4) //

// const universityGroup = {

//     groupName: "CS-101",
//     students: [],

//     addStudent(student) {
//         this.students.push(student);
//     },

//     removeStudent(id) {
//         this.students = this.students.filter(student => student.id !== id);
//     },

//     getStudent(id) {
//         return this.students.find(student => student.id === id);
//     },

//     getAverageGrade(id) {
//         const student = this.getStudent(id);

//         if (!student || student.grade.length === 0) return 0;

//         return student.grade.reduce((sum, grade) => sum + grade, 0) / student.grade.length;
//     },

//     addGrade(id, grade) {
//         const student = this.getStudent(id);

//         if (student) {
//             student.grade.push(grade);
//         }
//     },

//     getTopStudent() {
//         return this.students.reduce((top, student) => {
//             if (!top || this.getAverageGrade(student.id) > this.getAverageGrade(top.id)) {
//                 return student;
//             }
//             return top;
//         }, null);
//     },

//     getAllStudents() {
//         return this.students;
//     },

//     getBestStudentName() {
//         const student = this.getTopStudent();

//         return student ? student.name : null;
//     }
// };

// universityGroup.addStudent({ id: 1, name: "Ali", age: 20, grade: [80, 90, 100] });
// universityGroup.addStudent({ id: 2, name: "Murad", age: 21, grade: [90, 95, 100] });
// universityGroup.addStudent({ id: 3, name: "Vali", age: 19, grade: [70, 80, 75] });

// console.log(universityGroup.getStudent(1));
// console.log(universityGroup.getAverageGrade(2)); // 95
// universityGroup.addGrade(2, 100);
// console.log(universityGroup.getAverageGrade(2)); // 96.25
// console.log(universityGroup.getTopStudent());
// console.log(universityGroup.getAllStudents());
// console.log(universityGroup.getBestStudentName());
// universityGroup.removeStudent(3);
// console.log(universityGroup.getAllStudents());  