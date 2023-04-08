import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public username: string
  public password: string
  public errorMessage: string



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    if (form.valid) {
      if (this.username === "admin" && this.password === "12345") {
        this.router.navigateByUrl("/admin/main")
      }
      else {
        this.errorMessage = "Username or password incorrect."
      }
    }
    else {
      this.errorMessage = "Enter complete information."
    }
  }

}
