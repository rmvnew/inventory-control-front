import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CategoryModule } from './conponents/categories/category.module';
import { ProductsModule } from './conponents/products/products.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './conponents/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CategoryModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
