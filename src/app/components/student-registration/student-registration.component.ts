import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../student.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './student-registration.component.html',
  styleUrl: './student-registration.component.css'
})
export class StudentRegistrationComponent {
      msg:string='';
      newStudent:Student={
        id:0,
        name:''
      }
      constructor(private service:StudentService){

      }
      saveStudent(){
        this.service.saveStudent(this.newStudent).subscribe(data=>{
            this.msg=data;
        })
      }

}
