import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './Student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Student[]>{
    return this.http.get<Student[]>('http://54.173.245.29:3737/student/get');
  }

  saveStudent(student: Student):Observable<string>{
    return this.http.post('http://54.173.245.29:3737/student/save',student,{responseType:'text'});
  }
}
