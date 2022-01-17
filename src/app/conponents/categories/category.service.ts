import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryResponse } from './model/category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = 'http://localhost:3000/api/v1/category/all'

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<CategoryResponse[]> {
    return this.http.get<CategoryResponse[]>(this.url)
  }

}
