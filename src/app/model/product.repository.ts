import { RestService } from './rest.service';
import { ProductModel } from './product.model';
import { Injectable, OnInit } from "@angular/core";

@Injectable()
export class ProductRepository implements OnInit {
    private products: ProductModel[] = []

    constructor(private restService: RestService) { }

    ngOnInit(): void {
        this.restService.getProducts().subscribe(products => this.products = products)
    }

    getProduct(id: number): ProductModel {
        return this.products.find(i => i.id === id)
    }

}