import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication';
import jwtDecode from "jwt-decode";
import { Router } from "@angular/router";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css', '../styles/css/main.css']
})
export class ChangePasswordComponent implements OnInit {
  userId: any;
  error: string;
  constructor(private authentication: AuthenticationService, private route: Router) { }

  ngOnInit() {
    if (localStorage.jwTToken) {
      const decoded = jwtDecode(localStorage.jwTToken)
      this.userId = decoded.id;
    }else{
      this.error = "first login";
    }
  }

  changePassword(oldPassword, newPassword, newPassword2) {
    if (newPassword === "" || newPassword !== newPassword2) {
      this.error = "The new password must match"
    } else {
      this.authentication.changePassword({ oldPassword, newPassword }, this.userId).subscribe(data => {
        this.error = null;
        this.route.navigateByUrl("/posts")
      }, error => {
        this.error = error;
      })
    }
  }

}
