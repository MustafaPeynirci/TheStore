import { Cart } from './../../model/cart.model';
import { ProductModel } from './../../model/product.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() products: ProductModel[] = []

  constructor(private cart: Cart) { }

  ngOnInit(): void {
  }

  addProductToCart(product: ProductModel) {
    this.cart.addItem(product)
  }

}
