import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../services/authentication";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css', '../styles/css/main.css']
})
export class ForgetPasswordComponent implements OnInit {
  error: string;
  message: string;
  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
  }

  forgetPassword(email) {
    this.authentication.forgetPassword({email}).subscribe(data => {
      this.message = data.message;
      this.error = null;
      email = ""
    }, error => {
      this.error = error;
      email = ""
    })
  }

}
