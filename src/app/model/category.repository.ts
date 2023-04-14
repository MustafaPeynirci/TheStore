import { ToastrService } from 'ngx-toastr';
import { RestService } from './rest.service';
import { CategoryModel } from './category.model';
import { Injectable, OnInit } from "@angular/core";

@Injectable()
export class CategoryRepository implements OnInit {

    private categories: CategoryModel[] = []

    constructor(
        private restService: RestService,
        private toastr: ToastrService
    ) {
        this.restService.getCategories().subscribe(categories => this.categories = categories)
    }

    ngOnInit(): void {
    }

    getCategory(id: number): CategoryModel {
        return this.categories.find(i => i.id == id)
    }
    getCategories(): CategoryModel[] {
        return this.categories
    }
    saveCategory(category: CategoryModel) {
        if (category.id == null || category.id == 0) {
            this.restService.addCategory(category).subscribe(c => this.categories.push(c))
            this.toastr.success("The category has been successfully added.")
        }
        else {
            this.restService.updateCategory(category).subscribe(c => {
                this.categories.splice(this.categories.findIndex(c => c.id == category.id), 1, category)
                this.toastr.success("The category has been successfully updated.")
            })
        }
    }
    deleteCategory(category: CategoryModel) {
        this.restService.deleteCategory(category).subscribe(c => this.categories.splice(this.categories.findIndex(c => c.id == category.id), 1))
    }

}