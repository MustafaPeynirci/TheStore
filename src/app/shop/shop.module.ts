import { BrowserModule } from '@angular/platform-browser';
import { ModelModule } from './../model/model.module';
import { NgModule } from "@angular/core";
import { ShopComponent } from './shop.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    providers: [],
    declarations: [ShopComponent],
    exports: [ShopComponent]
})
export class ShopModule { }