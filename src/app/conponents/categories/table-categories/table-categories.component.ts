import { CategoryPaginateResponse } from './../model/category.model';
import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-categories',
  templateUrl: './table-categories.component.html',
  styleUrls: ['./table-categories.component.css']
})
export class TableCategoriesComponent implements OnInit {

  categoryPaginateResponse!: CategoryPaginateResponse

  constructor(private service: CategoryService) { }

  ngOnInit(): void {

    this.service.getAllCategoriesPaginate()
      .subscribe(res => this.categoryPaginateResponse = res)

  }

}
