import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomepageComponent }  from './pages/home/homepage.component';
import { NavHeaderComponent } from './directives/nav-header/nav-header.component';
import { CatalogOverviewComponent } from './directives/catalog-overview/catalog-overview.component';
import { ProductThumbnailComponent } from './directives/product-thumbnail/product-thumbnail.component';
import {SidebarFilterComponent} from './directives/sidebar-filter/sidebar-filter.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  declarations: [
    ProductThumbnailComponent,
    AppComponent,
    HomepageComponent,
    NavHeaderComponent,
    CatalogOverviewComponent,
    SidebarFilterComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
