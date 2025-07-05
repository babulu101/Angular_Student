import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-resord',
  imports: [CommonModule],
  templateUrl: './student-resord.component.html',
  styleUrl: './student-resord.component.css'
})
export class StudentResordComponent {
        students:Student[]=[];
       constructor(private service:StudentService){}
         ngOnInit(): void {
    this.getStudents();
  }
        getStudents(){
            this.service.getAll().subscribe(data=>{
              this.students=data;
            });
        }


}
