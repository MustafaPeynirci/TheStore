import { RestService } from './rest.service';
import { ProductModel } from './product.model';
import { Injectable, OnInit } from "@angular/core";

@Injectable()
export class ProductRepository implements OnInit {
    private products: ProductModel[] = []

    constructor(private restService: RestService) {
        this.restService.getProducts().subscribe(products => this.products = products)
    }

    ngOnInit(): void {
    }

    getProduct(id: number): ProductModel {
        return this.products.find(i => i.id === id)
    }
    getProducts(): ProductModel[] {
        return this.products
    }

}