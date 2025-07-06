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
    return this.http.get<Student[]>('http://3.15.221.143:3737/student/get');
  }
  saveStudent(student: Student):Observable<string>{
    return this.http.post('http://3.15.221.143:3737/student/get',student,{responseType:'text'});
  }
}
