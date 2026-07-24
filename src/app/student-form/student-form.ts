import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Student } from '../student';
import { OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-student-form',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './student-form.html',
  styleUrl: './student-form.css',
})
export class StudentForm implements OnChanges {
  // @Input() title = '';
  // message = "";
//   @Output()
// incrementClicked = new EventEmitter<void>();

  // increase() {
  //   this.incrementClicked.emit();
  // }

  name: string = '';
  age: number = 0;
  department: string = '';
  email: string = '';

  @Output()
  studentAdded = new EventEmitter<Student>();

  @Output()
  studentUpdated = new EventEmitter<Student>();
   
  // add student 
  saveStudent() {

    const student: Student = {
      name: this.name,
      age: this.age,
      department: this.department,
      email: this.email
    };

    //this.studentAdded.emit(student);  // here we are sending student object. So Angular does something like this internally: $event = student;
    // So $event is simply whatever you pass to emit().
     if (this.isEditMode) {
      this.studentUpdated.emit(student);
    } else {
      this.studentAdded.emit(student);
    }

    // Clear the form
    this.name = '';
    this.age = 0;
    this.department = '';
    this.email = '';
  }

  @Input()
  student: Student | null = null;

  ngOnChanges(changes: SimpleChanges) {

   if (this.student) {
      this.name = this.student.name;
      this.age = this.student.age;
      this.department = this.student.department;
      this.email = this.student.email;
    }

  }

  get isEditMode(): boolean {     // false -> add student, true -> update student
     return this.student !== null;
  }

}
