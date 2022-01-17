import { SelectCategoriesComponent } from './select-categories/select-categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { TableCategoriesComponent } from './table-categories/table-categories.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SelectCategoriesComponent,
    ListCategoriesComponent,
    TableCategoriesComponent,
  ],
  exports:[SelectCategoriesComponent,ListCategoriesComponent]
})
export class CategoryModule { }
