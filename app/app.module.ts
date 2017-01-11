import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent}  from './app.component';
import {HomepageComponent}  from './pages/home/homepage.component';
import {NavHeaderComponent} from './directives/nav-header/nav-header.component';
import {CatalogOverviewComponent} from './directives/catalog-overview/catalog-overview.component';
import {ProductThumbnailComponent} from './directives/product-thumbnail/product-thumbnail.component';
import {SidebarFilterComponent} from './directives/sidebar-filter/sidebar-filter.component';
import {ProductOverviewComponent} from './pages/product-overview/product-overview.component'
import {CustomerOverviewComponent} from './pages/customer-overview/customer-overview.component';
import {SearchPipe} from './pipes/search-pipe';
import {ProductDetailComponent} from "./pages/product-detail/product-detail.component";

const appRoutes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'products', component: ProductOverviewComponent},
  {path: 'product', component: ProductDetailComponent},
  {path: 'customers', component: CustomerOverviewComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpModule,
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    ProductThumbnailComponent,
    AppComponent,
    HomepageComponent,
    NavHeaderComponent,
    CatalogOverviewComponent,
    SidebarFilterComponent,
    ProductOverviewComponent,
    SearchPipe,
    CustomerOverviewComponent,
    ProductDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
