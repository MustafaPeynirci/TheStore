import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from './../model/model.module';
import { NgModule } from "@angular/core";
import { ShopComponent } from './shop.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    providers: [],
    declarations: [ShopComponent, NavbarComponent, CartSummaryComponent],
    exports: [ShopComponent]
})
export class ShopModule { }