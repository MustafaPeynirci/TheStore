import { Cart } from './cart.model';
import { ProductRepository } from './product.repository';
import { CategoryRepository } from './category.repository';
import { RestService } from './rest.service';
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [HttpClientModule],
    providers: [RestService, ProductRepository, CategoryRepository, Cart]
})
export class ModelModule { }