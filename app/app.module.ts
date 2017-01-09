import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { CatalogOverviewComponent } from './catalog-overview/catalog-overview.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    NavHeaderComponent,
    CatalogOverviewComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
