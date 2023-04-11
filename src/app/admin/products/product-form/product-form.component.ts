import { ProductRepository } from './../../../model/product.repository';
import { ProductModel } from './../../../model/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  editing: boolean = false
  product: ProductModel = new ProductModel()

  constructor(
    private activatedRoute: ActivatedRoute,
    private productRepository: ProductRepository
  ) {
    this.editing = activatedRoute.snapshot.params['mode'] == 'edit'
    if (this.editing) {
      this.product = productRepository.getProduct(activatedRoute.snapshot.params['id'])
    }
  }

  ngOnInit(): void {
  }

  save(form) {

  }

}
