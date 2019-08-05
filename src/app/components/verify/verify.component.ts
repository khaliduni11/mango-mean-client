import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['../styles/css/main.css', './verify.component.css']
})
export class VerifyComponent implements OnInit {
  verifyDisable: boolean = false;
  disable: any;
  feedback: string;
  error: string
  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
    this.verifyDisable = false;
    this.disable = setInterval(() => {
      this.verifyDisable = true
    }, 30000);
  }

  resend(email){
    this.authentication.resend({email}).subscribe(data => {
      this.feedback = "verification resend. please check your email"
      this.error = null;
    }, error => {
      this.feedback = null;
      this.error = error;
    })
  }

}
