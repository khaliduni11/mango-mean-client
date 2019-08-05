import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from "../../services/authentication";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../styles/css/main.css']
})
export class SignupComponent implements OnInit {


  error: string;

  constructor(private authentication: AuthenticationService, private router: Router, private toast: ToastrService) { }

  ngOnInit() {
  }

  signup(firstName, lastName, email, password, image) {
    this.authentication.signup({ firstName, lastName, password, email, image }).subscribe(data => {
      this.router.navigateByUrl("/verify")
    }, error => {
      if (error === "verify your account") {
        this.router.navigateByUrl("/verify");
        this.error = null;
      }else{
        this.error = error;
      }
    })
  }

}
