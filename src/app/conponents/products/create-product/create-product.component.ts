import { ProductService } from './../product.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProductRequestCreate } from './../model/product.model';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  private category_number = 0
  private department_number = 0

  productFormGroup!: FormGroup

  constructor(
    private service: ProductService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.productFormGroup = this.formBuilder.group({
      // id_category: this.category_number,
      // id_department: this.department_number,
      invoice_number: ['', Validators.required],
      name: ['', Validators.required],
      barcode: ['', Validators.required],
      part_number: ['', Validators.required],
      model: ['', Validators.required],
      condition: ['', Validators.required],
      quantity: [0, Validators.required],
      minimum_quantity: [0, Validators.required],
      value: [0.0, Validators.required],
      responsible: ['', Validators.required],
      institute_code: ['', Validators.required],
      location: ['', Validators.required]
    })
  }


  save() {
    console.log(this.productFormGroup.value)
    this.service.createProducts(this.productFormGroup.value)
      .subscribe(res => {
        this.toast(res.name)
        this.productFormGroup.reset()
        this.router.navigateByUrl('/product/list')
      })
  }

  toast(name: string) {
    this.toastr.success(`${name} registrado com sucesso!!`, "Sucesso")
  }

  changeCategory($event: any) {
    const category = $event['value']
    this.category_number = category
    // console.log('category: ',this.category_number)
    this.productFormGroup.addControl('new', new FormControl(this.category_number))
  }

  changeDepartment($event: any) {
    const department = $event['value']
    this.department_number = department
    // console.log('Department: ',this.department_number)
    this.productFormGroup.addControl('new', new FormControl(this.department_number))
  }

}
