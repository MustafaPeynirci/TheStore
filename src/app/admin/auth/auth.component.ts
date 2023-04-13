import { AuthService } from './../../model/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public username: string
  public password: string
  public errorMessage: string

  constructor(
    private router: Router,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    if (form.valid) {
      this.authService.authenticate(this.username, this.password).subscribe(response => {
        if (response) {
          this.router.navigateByUrl("/admin/main/products")
          this.toastr.success("You have been successfully logged in.")
        }
        else {
          this.errorMessage = "Username or password incorrect."
        }
      })
    }
    else {
      this.errorMessage = "Enter complete information."
    }
  }

}
