import { DepartmentModule } from './../department/department.module';
import { CategoryModule } from './../categories/category.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListProductsComponent } from './list-products/list-products.component';
import { NgModule } from "@angular/core";
import { TableProductsComponent } from './table-products/table-products.component';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './create-product/create-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
  imports:[
    CommonModule,
    HttpClientModule,
    FormsModule,
    CategoryModule,
    DepartmentModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      progressBar:true,
      progressAnimation:'increasing'
    })
  ],
  declarations: [
    ListProductsComponent,
    TableProductsComponent,
    CreateProductComponent
  ],
  exports: [ListProductsComponent]
})
export class ProductsModule { }
