import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomepageComponent }  from './pages/home/homepage.component';
import { NavHeaderComponent } from './directives/nav-header/nav-header.component';
import { CatalogOverviewComponent } from './directives/catalog-overview/catalog-overview.component';
import { ProductThumbnailComponent } from './directives/product-thumbnail/product-thumbnail.component';
import { ProductOverviewComponent } from './pages/product-overview/product-overview.component'
import { SearchPipe } from './pipes/search-pipe'
const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'products', component: ProductOverviewComponent}
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
    ProductOverviewComponent,
    SearchPipe
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
