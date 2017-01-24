import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {ProductComponent} from "./pages/product/product.component";
import {CatalogComponent} from "./pages/catalog/catalog.component";
import {CustomerComponent} from "./pages/customer/customer.component";
import {HeaderComponent} from "./directives/header/header.component";
import {FooterComponent} from "./directives/footer/footer.component";
import {ProductThumbnailComponent} from "./directives/product-thumbnail/product-thumbnail.component";
import {ProductService} from "./services/product.service";
import {AccountService} from "./services/account.service";
import {SupplierService} from "./services/supplier.service";
import {SortPipe} from "./pipes/sort-pipe";
import {CategoryFilterPipe} from "./pipes/category-filter-pipe";
import {SupplierFilterPipe} from "./pipes/supplier-filter-pipe";
import {SearchPipe} from "./pipes/search-pipe";
import {ShoppingcartComponent} from "./pages/shoppingcart/shoppingcart.component";
import {ShoppingcartService} from "./services/shoppingcart.service";
import {OrderpricePipe} from "./pipes/orderprice-pipe";
import {MyDatePickerModule} from "mydatepicker";
import {StockService} from "./services/stock.service";
import {CategoryService} from "./services/category.service";
import {OrderComponent} from "./pages/order/order.component";
import {LoginComponent} from "./pages/login/login.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {ThanksOrderComponent} from "./pages/thanks-order/thanks-order.component";
import {LogoutComponent} from "./pages/logout/logout.component";
import {LoginService} from "./services/login.service";
import {OrderService} from "./services/order.service";
import {InvoiceComponent} from "./directives/invoice/invoice.component";
import {PostOrderComponent} from "./pages/post-order/post-order.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
  {path: 'catalog/:category', component: CatalogComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'customer/:customerid', component: CustomerComponent},
  {path: 'order/:id', component: OrderComponent},
  {path: 'order', component: OrderComponent},
  {path: 'shoppingcart', component: ShoppingcartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'thanks', component: ThanksOrderComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'login/error', component: LoginComponent},
  {path: 'postorder', component: PostOrderComponent}
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
    OrderComponent,
    LoginComponent,
    LogoutComponent,
    PostOrderComponent,

    // directives
    HeaderComponent,
    FooterComponent,
    ProductThumbnailComponent,
    InvoiceComponent,

    // pipes
    SortPipe,
    CategoryFilterPipe,
    SupplierFilterPipe,
    SearchPipe,
    OrderpricePipe,
    LoginComponent,
    ContactComponent,
    ThanksOrderComponent,

  ],
  imports: [
    // modules
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    MyDatePickerModule,
  ],
  providers: [
    // services
    ProductService,
    AccountService,
    SupplierService,
    ShoppingcartService,
    StockService,
    CategoryService,
    LoginService,
    OrderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
