import { CategoryService } from './category.service';
import { CategoryResponse } from './../model/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-categories',
  templateUrl: './select-categories.component.html',
  styleUrls: ['./select-categories.component.css']
})
export class SelectCategoriesComponent implements OnInit {

  categorieResponse!: CategoryResponse

  constructor(private service: CategoryService) { }

  ngOnInit(): void {

    this.service.getAllCategories()
      .subscribe(res => this.categorieResponse = res)

  }

}
