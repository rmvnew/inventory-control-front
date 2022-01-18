import { ToastrService } from 'ngx-toastr';
import { CategoryService } from './../category.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoryRequest } from '../model/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

   myForm!: FormGroup

  constructor(

    private service: CategoryService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private router:Router

  ) { }

  createForm(category: CategoryRequest) {
    this.myForm = new FormGroup({
      name: new FormControl(category.name)
    })
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['',Validators.required]
    })
  }

  save() {
    this.service.createCategories(this.myForm.value)
      .subscribe(res => {
        this.toast(res.name)
        this.myForm.reset(new CategoryRequest())
        this.router.navigateByUrl('/category/list')
      })
  }

  toast(name:string) {
    this.toastr.success(`${name} registrada com sucesso!!`, "Sucesso")
  }

}
