import { Cart } from './../model/cart.model';
import { CategoryModel } from './../model/category.model';
import { ProductModel } from './../model/product.model';
import { CategoryRepository } from './../model/category.repository';
import { ProductRepository } from './../model/product.repository';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public selectedCategory: CategoryModel = null
  public productsPerPage = 3
  public selectedPage = 1

  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository,
    private cart: Cart,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get products(): ProductModel[] {
    let index = (this.selectedPage - 1) * this.productsPerPage
    return this.productRepository.getProducts(this.selectedCategory).slice(index, index + this.productsPerPage)
  }
  get categories(): CategoryModel[] {
    return this.categoryRepository.getCategories()
  }
  get pageNumbers(): number[] {
    return Array(Math.ceil(this.productRepository
      .getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0)
      .map((a, i) => i + 1)
  }
  changeCategory(newCategory?: CategoryModel) {
    this.selectedCategory = newCategory
  }
  changePage(p: number) {
    this.selectedPage = p
  }
  addProductToCart(product: ProductModel) {
    this.cart.addItem(product)
    // this.router.navigateByUrl("/cart")
  }
}
