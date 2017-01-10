import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomepageComponent }  from './pages/home/homepage.component';
import { NavHeaderComponent } from './directives/nav-header/nav-header.component';
import { CatalogOverviewComponent } from './directives/catalog-overview/catalog-overview.component';
import { ProductThumbnailComponent } from './directives/product-thumbnail/product-thumbnail.component';
import { CustomerOverviewComponent } from  './pages/customer-overview/customer-overview.component'
const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'customers', component: CustomerOverviewComponent}
];

@NgModule({
  imports:      [
    BrowserModule, FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    ProductThumbnailComponent,
    AppComponent,
    HomepageComponent,
    NavHeaderComponent,
    CatalogOverviewComponent,
    CustomerOverviewComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
