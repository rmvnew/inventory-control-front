import { SelectCategoriesComponent } from './select-categories/select-categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { TableCategoriesComponent } from './table-categories/table-categories.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      progressBar:true,
      progressAnimation:'increasing'
    })
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
