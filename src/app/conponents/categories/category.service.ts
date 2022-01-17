import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryResponse, CategoryPaginateResponse, CategoryRequest } from './model/category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private URL_NO_PAGINATE = 'http://localhost:3000/api/v1/category/all'
  private URL_PAGINATE = 'http://localhost:3000/api/v1/category'

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<CategoryResponse[]> {
    return this.http.get<CategoryResponse[]>(this.URL_NO_PAGINATE)
  }

  getAllCategoriesPaginate(): Observable<CategoryPaginateResponse> {
    return this.http.get<CategoryPaginateResponse>(this.URL_PAGINATE)
  }

  createCategories(category:CategoryRequest):Observable<CategoryResponse>{
    return this.http.post<CategoryResponse>(this.URL_PAGINATE,category)
  }

}
