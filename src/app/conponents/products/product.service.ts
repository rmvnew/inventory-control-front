import { Product, ProductResponse } from './model/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private listProduct: any[]
  private url = 'http://localhost:3000/api/v1/product'

  constructor(private httpClient: HttpClient) {
    // this.listProduct = []
  }


  // get products() {
  //   return this.listProduct
  // }

  getAllProducts(): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(this.url)
  }



}
