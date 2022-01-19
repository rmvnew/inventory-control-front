import { Product, ProductResponse, ProductRequestCreate } from './model/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = 'http://localhost:3000/api/v1/product'

  constructor(private httpClient: HttpClient) { }

  getAllProducts(): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(this.url)
  }

  createProducts(product: ProductRequestCreate): Observable<Product> {
    return this.httpClient.post<Product>(this.url, product)
  }

}
