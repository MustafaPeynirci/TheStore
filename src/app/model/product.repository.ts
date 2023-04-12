import { ToastrService } from 'ngx-toastr';
import { CategoryModel } from './category.model';
import { RestService } from './rest.service';
import { ProductModel } from './product.model';
import { Injectable, OnInit } from "@angular/core";

@Injectable()
export class ProductRepository implements OnInit {
    private products: ProductModel[] = []

    constructor(
        private restService: RestService,
        private toastr: ToastrService
    ) {
        this.restService.getProducts().subscribe(products => this.products = products)
    }

    ngOnInit(): void {
    }

    getProduct(id: number): ProductModel {
        return this.products.find(i => i.id == id)
    }
    getProducts(category: CategoryModel = null): ProductModel[] {
        if (category) {
            return this.products.filter(i => i.category == category.name)
        }
        else {
            return this.products
        }
    }
    saveProduct(product: ProductModel) {
        if (product.id == null || product.id == 0) {
            this.restService.addProduct(product).subscribe(p => this.products.push(p))
            this.toastr.success("The product has been successfully added.")
        }
        else {
            this.restService.updateProduct(product).subscribe(p => {
                this.products.splice(this.products.findIndex(p => p.id == product.id), 1, product)
                this.toastr.success("The product has been successfully updated.")
            })
        }
    }

}