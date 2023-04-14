import { ToastrService } from 'ngx-toastr';
import { CategoryModel } from './../../../model/category.model';
import { Component, OnInit } from '@angular/core';
import { CategoryRepository } from 'src/app/model/category.repository';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categoryModel: CategoryModel
  selectedCategory: CategoryModel

  constructor(
    private categoryRepository: CategoryRepository,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  getCategories(): CategoryModel[] {
    return this.categoryRepository.getCategories()
  }
  removeCategory(category: CategoryModel) {
    this.categoryRepository.deleteCategory(category)
    this.toastr.success("The category has been successfully deleted.")
  }
  changeSelected(select) {
    this.selectedCategory = select
  }
  getCategory(data: any) {
    this.categoryModel = data
    this.removeCategory(data)
  }

}
