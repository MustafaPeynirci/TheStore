import { CategoryRepository } from './../../model/category.repository';
import { CategoryModel } from './../../model/category.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public selectedCategory: CategoryModel = null
  @Output() category = new EventEmitter<CategoryModel>()

  constructor(private categoryRepository: CategoryRepository) { }

  ngOnInit(): void {
  }

  get categories(): CategoryModel[] {
    return this.categoryRepository.getCategories()
  }
  changeCategory(newCategory?: CategoryModel) {
    this.selectedCategory = newCategory
    this.category.emit(newCategory)
  }

}
