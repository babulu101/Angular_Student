import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './Student';
import { Observable } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Student[]>{
    return this.http.get<Student[]>('http://localhost:8181/student/get');
  }
  saveStudent(student: Student):Observable<string>{
    return this.http.post('http://localhost:8181/student/save',student,{responseType:'text'});
  }
}
