import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication';
import { Router } from "@angular/router";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../styles/css/main.css']
})
export class SigninComponent implements OnInit {


  @Output() isAuthenticated = new EventEmitter<any>();
  error: string;

  constructor(private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  signin(email, password) {
    this.authenticationService.signin({ email, password }).subscribe(data => {
      const token = data.token;
      localStorage.setItem('jwTToken', token);
      this.router.navigateByUrl("/posts")
      this.isAuthenticated.emit(true);
    }, error => {
      if(error === "verify your account"){
        this.router.navigateByUrl("/verify")
      }
      this.error = error;
    })
  }
}
