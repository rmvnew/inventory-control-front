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

  // @Input() request: ProductRequestCreate = {
  //   id_invoice: 0,
  //   id_category: 0,
  //   id_department: 0,
  //   name: '',
  //   barcode: '',
  //   part_number: '',
  //   model: '',
  //   condition: '',
  //   quantity: 0,
  //   minimum_quantity: 0,
  //   value: 0.0,
  //   responsible: '',
  //   institute_code: '',
  //   location: ''
  // }

  productFormGroup!: FormGroup

  constructor(
    private service: ProductService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.productFormGroup = this.formBuilder.group({
      id_invoice: [0, Validators.required],
      id_category: [0, Validators.required],
      id_department: [0, Validators.required],
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

  // createForm(product: ProductRequestCreate) {
  //   this.productFormGroup = new FormGroup({

  //     id_invoice: new FormControl(product.id_invoice),
  //     id_category: new FormControl(product.id_category),
  //     id_department: new FormControl(product.id_department),
  //     name: new FormControl(product.name),
  //     barcode: new FormControl(product.barcode),
  //     part_number: new FormControl(product.part_number),
  //     model: new FormControl(product.model),
  //     condition: new FormControl(product.condition),
  //     quantity: new FormControl(product.quantity),
  //     minimum_quantity: new FormControl(product.minimum_quantity),
  //     value: new FormControl(product.value),
  //     responsible: new FormControl(product.responsible),
  //     institute_code: new FormControl(product.institute_code),
  //     location: new FormControl(product.location)

  //   })
  // }

  save() {
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

  changed($event: any) {
    console.log($event)
  }

}
