import { CategoryModel } from './category.model';
import { ProductModel } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RestService {

  baseUrl: string = "http://localhost:3500/"

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.baseUrl + "products")
  }
  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.baseUrl + "categories")
  }

}
