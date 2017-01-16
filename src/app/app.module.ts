import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {ProductComponent} from "./pages/product/product.component";
import {CatalogComponent} from "./pages/catalog/catalog.component";
import {CustomerComponent} from "./pages/customer/customer.component";
import {HeaderComponent} from "./directives/header/header.component";
import {ProductThumbnailComponent} from "./directives/product-thumbnail/product-thumbnail.component";
import {ProductService} from "./services/product.service";
import {AccountService} from "./services/account.service";
import {SupplierService} from "./services/supplier.service";
import {SortPipe} from "./pipes/sort-pipe";
import {FilterPipe} from "./pipes/filter-pipe";
import {SearchPipe} from "./pipes/search-pipe";
import {ShoppingcartComponent} from "./pages/shoppingcart/shoppingcart.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer/:id', component: CustomerComponent},
  {path: 'shoppingcart', component: ShoppingcartComponent}
];

@NgModule({
  declarations: [
    // angular
    AppComponent,

    // pages
    HomeComponent,
    CatalogComponent,
    ProductComponent,
    CustomerComponent,
    ShoppingcartComponent,

    // directives
    HeaderComponent,
    ProductThumbnailComponent,

    // pipes
    SortPipe,
    FilterPipe,
    SearchPipe,

  ],
  imports: [
    // modules
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    // services
    ProductService,
    AccountService,
    SupplierService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
