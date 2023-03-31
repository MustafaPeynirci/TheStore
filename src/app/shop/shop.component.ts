import { CategoryModel } from './../model/category.model';
import { ProductModel } from './../model/product.model';
import { CategoryRepository } from './../model/category.repository';
import { ProductRepository } from './../model/product.repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  public selectedCategory: CategoryModel = null

  constructor(
    private productRepository: ProductRepository,
    private categoryRepository: CategoryRepository
  ) { }

  ngOnInit(): void {
  }

  get products(): ProductModel[] {
    return this.productRepository.getProducts()
  }
  get categories(): CategoryModel[] {
    return this.categoryRepository.getCategories()
  }
  changeCategory(newCategory?: CategoryModel) {
    this.selectedCategory = newCategory
  }

}
