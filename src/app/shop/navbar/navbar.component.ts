import { Router } from '@angular/router';
import { AuthService } from './../../model/auth.service';
import { Cart } from './../../model/cart.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
