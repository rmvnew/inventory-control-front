import { CategoriesComponent } from './categories.component';
import { SelectCategoriesComponent } from './select-categories/select-categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SelectCategoriesComponent,
  ],
  exports:[SelectCategoriesComponent]
})
export class CategoryModule { }
