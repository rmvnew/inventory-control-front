import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryResponse } from '../products/model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = 'http://localhost:3000/api/v1/category'

  constructor(private http: HttpClient) { }



  getAllCategories(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(this.url)
  }

}
