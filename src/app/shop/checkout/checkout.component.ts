import { OrderRepository } from './../../model/order.repository';
import { Order } from './../../model/order.model';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  orderSent: boolean = false
  submitted: boolean = false

  constructor(
    public order: Order,
    private orderRepository: OrderRepository
  ) { }

  ngOnInit(): void {
  }

  submitOrder(form: NgForm) {
    this.submitted = true
    if (form.valid) {
      this.orderRepository.saveOrder(this.order).subscribe(order => {
        this.order.clearOrder()
        this.orderSent = true
        this.submitted = false
      })
    }
  }

}
