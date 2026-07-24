import { Component, output, signal } from '@angular/core';
import {Student} from './student';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StudentForm } from './student-form/student-form';



@Component({
  selector: 'app-root',
  imports: [ CommonModule, FormsModule, StudentForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
// export class App {
//   name: string = '';
//   age: number = 0;
//   department: string = '';
//   email: string ='';
//   students: Student[] = [];
//   selectedIndex: number = -1;
//   searchText = '';
//   today = new Date();

//   addStudent(){

//     const student:Student = {
//       name: this.name,
//       age: this.age,
//       department: this.department,
//       email: this.email
//     };

//     if(this.selectedIndex === -1){
//       //add new student
//       this.students.push(student);
//     }else{
//       // update existing student
//       this.students[this.selectedIndex] = student;
//       this.selectedIndex = -1;
//     }

//     this.name = '';
//     this.age = 0;
//     this.department = '';
//     this.email = '';
//   }

//   deleteStudent(index: number){
//     this.students.splice(index, 1);
//   }

//   editStudent(index: number){
//     const student = this.students[index];
//     this.name = student.name;
//     this.age = student.age;
//     this.department = student.department;
//     this.email = student.email;
//     this.selectedIndex = index;
//   }

//   getFilteredStudents() : Student[] {
//     if(this.searchText.trim() === ''){
//       return this.students;
//     }
//     return this.students.filter(student => student.name.toLowerCase().includes(this.searchText.toLowerCase()));
//   }
// }
// export class App{
//   // title : String = 'Student Registration System';
//   count : number = 0;
//   increment(){
//     this.count++;
//   }
// }

export class App{
  students: Student[] = [];
  selectedStudent : Student | null = null;
  editingIndex : number = -1;
  
  // isEditMode == false
  addStudent(student: Student) {
    this.students.push(student);
  }

  editStudent(student : Student, index : number){
    this.selectedStudent = student;  // which row(student) is selected to edit
    this.editingIndex = index; // index of the row
  }

  updateStudent(student: Student) {
    this.students[this.editingIndex] = student;
    this.editingIndex = -1;  // reset
    this.selectedStudent = null;  // editing over , so reset to null. no student is select to edit.
  }

  deleteStudent(student: Student) {
  console.log("Delete clicked", student);
  }
}