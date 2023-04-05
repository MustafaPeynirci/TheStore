import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { ProductModel } from './product.model';

@Injectable()
export class Cart {
    public items: CartItem[] = []
    public itemCount: number = 0
    public total: number = 0

    constructor(private toastr: ToastrService) { }

    addItem(product: ProductModel, quantity: number = 1) {
        let item = this.items.find(i => i.product.id == product.id)
        if (item != undefined) {
            item.quantity += quantity
        }
        else {
            this.items.push(new CartItem(product, quantity))
        }
        this.calculate()
    }
    updateQuantity(product: ProductModel, quantity: number) {
        let item = this.items.find(i => i.product.id == product.id)
        if (item != undefined) {
            item.quantity = quantity
        }
        this.calculate()
    }
    calculate() {
        this.itemCount = 0
        this.total = 0

        this.items.forEach(item => {
            this.itemCount += item.quantity
            this.total += (item.quantity * item.product.price)
        })
    }
    removeItem(id: number) {
        let index = this.items.findIndex(i => i.product.id == id)
        this.items.splice(index, 1)
        this.calculate()
        this.toastr.warning("The product has been deleted")
    }
    clear() {
        this.items = []
        this.itemCount = 0
        this.total = 0
    }
}
export class CartItem {
    constructor(
        public product: ProductModel,
        public quantity: number
    ) { }
}