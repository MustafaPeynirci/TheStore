import { CategoryModel } from './../model/category.model';
import { ProductModel } from './../model/product.model';
import { ProductRepository } from './../model/product.repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public selectedCategory: CategoryModel = null
  public productsPerPage = 999
  public selectedPage = 1
  public selectedProducts: ProductModel[] = []

  constructor(private productRepository: ProductRepository) { }

  ngOnInit(): void {
  }

  get products(): ProductModel[] {
    let index = (this.selectedPage - 1) * this.productsPerPage
    return this.productRepository.getProducts(this.selectedCategory).slice(index, index + this.productsPerPage)
  }
  get pageNumbers(): number[] {
    return Array(Math.ceil(this.productRepository
      .getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0)
      .map((a, i) => i + 1)
  }
  changePage(p: number) {
    this.selectedPage = p
  }
  changePageSize(size: number) {
    this.productsPerPage = size
    this.changePage(1)
  }
  getCategory(category: CategoryModel) {
    this.selectedCategory = category
  }
}
