import { Router } from '@angular/router';
import { AuthService } from './../model/auth.service';
import { Cart } from './../model/cart.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(
    public cart: Cart,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signOut() {
    this.authService.clear()
    this.router.navigateByUrl("/shop")
  }

}
