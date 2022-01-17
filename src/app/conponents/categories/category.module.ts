import { SelectCategoriesComponent } from './select-categories/select-categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { TableCategoriesComponent } from './table-categories/table-categories.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SelectCategoriesComponent,
    ListCategoriesComponent,
    TableCategoriesComponent,
    CreateCategoryComponent,
  ],
  exports:[SelectCategoriesComponent,ListCategoriesComponent]
})
export class CategoryModule { }
