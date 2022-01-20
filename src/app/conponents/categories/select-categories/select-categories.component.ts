import { CategoryService } from '../category.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoryResponse } from '../model/category.model';

@Component({
  selector: 'app-select-categories',
  templateUrl: './select-categories.component.html',
  styleUrls: ['./select-categories.component.css']
})
export class SelectCategoriesComponent implements OnInit {

  @Output() onChangeCategoriesValues = new EventEmitter<any>()



  categorieResponse: CategoryResponse[] = []

  constructor(private service: CategoryService) { }

  ngOnInit(): void {

    this.service.getAllCategories()
      .subscribe(res => {

        for (let index = 0; index < res.length; index++) {

          this.categorieResponse.push(res[index])

        }

      })

  }

  onChanged(value:any){

    const valueEmiter = {value: value.value}
    this.onChangeCategoriesValues.emit(valueEmiter)

  }

}
