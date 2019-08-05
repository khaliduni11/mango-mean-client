import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from "../../services/authentication";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-change-forget-password',
  templateUrl: './change-forget-password.component.html',
  styleUrls: ['./change-forget-password.component.css', '../styles/css/main.css']
})
export class ChangeForgetPasswordComponent implements OnInit {
  userId: any;
  randomNumber: any;
  error: string;
  constructor(
    private authentication: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get("userId");
    this.randomNumber = this.route.snapshot.paramMap.get("randomNumbers");
  }

  changeForgetPassword(password, comfirm) {
    if (password === comfirm) {
      this.authentication.changeForgetPassword(password, this.userId, this.randomNumber).subscribe(res => {
        localStorage.setItem("jwTToken", res.token);
        this.router.navigateByUrl("/posts");
      }, error => {
        this.error = error;
      })
    } else {
      this.error = "password and comfirm password must be same";
    }
  }
}
