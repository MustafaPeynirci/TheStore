import { Injectable } from '@angular/core';
import { Cart } from './cart.model';

@Injectable()
export class Order {
    public id: number
    public name: string
    public address: string
    public city: string
    public phone: number
    public email: string

    public isSent: boolean = false

    constructor(public cart: Cart) { }

    clearOrder() {
        this.id = null
        this.name = null
        this.address = null
        this.city = null
        this.phone = null
        this.email = null
        this.isSent = false
        this.cart.clear()
    }
}