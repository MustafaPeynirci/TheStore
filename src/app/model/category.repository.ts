import { RestService } from './rest.service';
import { CategoryModel } from './category.model';
import { Injectable, OnInit } from "@angular/core";

@Injectable()
export class CategoryRepository implements OnInit {
    private categories: CategoryModel[] = []

    constructor(private restService: RestService) { }

    ngOnInit(): void {
        this.restService.getCategories().subscribe(categories => this.categories = categories)
    }

    getCategories(id: number): CategoryModel {
        return this.categories.find(i => i.id === id)
    }

}