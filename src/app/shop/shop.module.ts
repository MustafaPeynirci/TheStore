import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from './../model/model.module';
import { NgModule } from "@angular/core";
import { ShopComponent } from './shop.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    providers: [],
    declarations: [ShopComponent, NavbarComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent, CategoryListComponent, ProductListComponent],
    exports: [ShopComponent, CartDetailComponent, CheckoutComponent]
})
export class ShopModule { }