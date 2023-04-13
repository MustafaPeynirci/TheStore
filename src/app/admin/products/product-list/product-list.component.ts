import { ProductModel } from './../../../model/product.model';
import { ProductRepository } from './../../../model/product.repository';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productModel: ProductModel
  selectedProduct: ProductModel

  constructor(
    private productRepository: ProductRepository,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  getProducts(): ProductModel[] {
    return this.productRepository.getProducts()
  }
  removeProduct(product: ProductModel) {
    this.productRepository.deleteProduct(product)
    this.toastr.success("The product has been successfully deleted.")
  }
  changeSelected(select) {
    this.selectedProduct = select
  }
  getProduct(data: any) {
    this.productModel = data
    this.removeProduct(data)
  }

}
