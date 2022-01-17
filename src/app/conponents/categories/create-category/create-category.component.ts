import { CategoryService } from './../category.service';
import { CategoryRequest } from './../model/category.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  @Input() request: CategoryRequest = {
    name: ''
  }

  constructor(private service: CategoryService) { }

  ngOnInit(): void {
  }

  save(){
    this.service.createCategories(this.request)
    .subscribe(res => {

    })
  }

}
