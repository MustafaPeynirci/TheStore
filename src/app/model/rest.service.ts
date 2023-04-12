import { Order } from './order.model';
import { CategoryModel } from './category.model';
import { ProductModel } from './product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RestService {

  baseUrl: string = "http://localhost:3500/"
  token: string

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.baseUrl + "products")
  }
  getCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.baseUrl + "categories")
  }
  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + "orders", order)
  }
  addProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(this.baseUrl + "products", product, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.token}>`
      })
    })
  }
  updateProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.put<ProductModel>(this.baseUrl + "products/" + product.id, product, {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.token}>`
      })
    })
  }
  authentication(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.baseUrl + "login", {
      username: username,
      password: password
    }).pipe(map(response => {
      this.token = response.success ? response.token : null
      console.log(this.token);
      return response.token
    }))
  }

}
