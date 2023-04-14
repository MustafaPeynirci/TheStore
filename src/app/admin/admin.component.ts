import { Router } from '@angular/router';
import { AuthService } from './../model/auth.service';
import { Cart } from './../model/cart.model';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  menuState: boolean = false;

  constructor(
    public cart: Cart,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  signOut() {
    this.authService.clear()
    this.router.navigateByUrl("/shop")
    this.toastr.success("You have been successfully logged out.")
  }
  menuToggle() {
    this.menuState = !this.menuState
    document.getElementsByTagName("body")[0].classList.toggle("toggle-sidebar")
  }

}
