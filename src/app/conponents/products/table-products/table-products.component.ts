import { Product, ProductResponse } from './../model/product.model';
import { ListProduct } from './../model/list-product.model';
import { ProductService } from './../product.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit {


  productResponse!: ProductResponse

  constructor(private service: ProductService) {

  }

  ngOnInit() {

    this.service.getAllProducts()
      .subscribe(res => this.productResponse = res)

  }

}
