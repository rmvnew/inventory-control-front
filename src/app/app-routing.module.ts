import { CreateCategoryComponent } from './conponents/categories/create-category/create-category.component';
import { CreateProductComponent } from './conponents/products/create-product/create-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListProductsComponent } from './conponents/products/list-products/list-products.component';
import { ListCategoriesComponent } from './conponents/categories/list-categories/list-categories.component';

const routes: Routes = [
  {
    path: '',
    component: ListProductsComponent
  },
  {
    path: 'product/list',
    component: ListProductsComponent
  },
  {
    path: 'product/create',
    component: CreateProductComponent
  },
  {
    path: 'category/list',
    component:ListCategoriesComponent
  },
  {
    path: 'category/create',
    component: CreateCategoryComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
