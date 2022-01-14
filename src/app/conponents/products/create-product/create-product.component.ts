import { ProductRequestCreate } from './../model/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  @Input() request: ProductRequestCreate = {
    id_invoice: 0,
    id_category: 0,
    name: '',
    barcode: '',
    part_number: '',
    model: '',
    condition: '',
    quantity: 0,
    minimum_quantity: 0,
    value: 0.0,
    responsible: '',
    institute_code: '',
    isActive: true,
    location: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
