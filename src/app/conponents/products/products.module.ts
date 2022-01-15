import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListProductsComponent } from './list-products/list-products.component';
import { NgModule } from "@angular/core";
import { TableProductsComponent } from './table-products/table-products.component';
import { CommonModule } from '@angular/common';
import { CreateProductComponent } from './create-product/create-product.component';
import { SelectCategoriesComponent } from './select-categories/select-categories.component';




@NgModule({
  imports:[
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    ListProductsComponent,
    TableProductsComponent,
    CreateProductComponent,
    SelectCategoriesComponent
  ],
  exports: [ListProductsComponent]
})
export class ProductsModule { }
