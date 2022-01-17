import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DepartmentResponse } from './model/department.model';



@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private url = 'http://localhost:3000/api/v1/department/all'

  constructor(private http: HttpClient) { }

  getAllDepartment(): Observable<DepartmentResponse[]> {
    return this.http.get<DepartmentResponse[]>(this.url)
  }
}
