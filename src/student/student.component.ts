import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  imports: [
    FormsModule,
    NgForOf
  ],
  styleUrl: './student.component.css'
})


export class StudentComponent {
  name: string = "";
  age: string = "";
  gender: string = "";
  city: string = "";

  students: any = [];

  onSubmit() {
    if (this.name && this.age && this.gender && this.city) {
      this.students.push({
        name: this.name,
        age: this.age,
        gender: this.gender,
        city: this.city,
      });

      // Clear the form after submission
      this.name = '';
      this.age = '';
      this.gender = '';
      this.city = '';
    }
  }
}
