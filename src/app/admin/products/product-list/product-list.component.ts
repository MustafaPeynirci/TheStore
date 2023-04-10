import { ProductModel } from './../../../model/product.model';
import { ProductRepository } from './../../../model/product.repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productRepository: ProductRepository) { }

  ngOnInit(): void {
  }

  getProducts(): ProductModel[] {
    return this.productRepository.getProducts()
  }
  removeProduct(id) {

  }

}
