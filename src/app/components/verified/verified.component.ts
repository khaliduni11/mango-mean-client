import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication";

@Component({
  selector: 'app-verified',
  templateUrl: './verified.component.html',
  styleUrls: ['./verified.component.css', '../styles/css/main.css']
})
export class VerifiedComponent implements OnInit {
  userId: string;
  randomNumber: string;
  redirect: any;
  error: any;
  success: string;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private authentication: AuthenticationService
    ) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get("userId");
    this.randomNumber = this.route.snapshot.paramMap.get("randomNumber");
    console.log(window.location.href)

    this.authentication.verified(this.userId, this.randomNumber).subscribe(data => {
      localStorage.setItem("jwTToken", data.token);
      this.success = "successfully verified your account";
      this.router.navigateByUrl("/posts");
      this.error = null;
    }, error => {
      this.error = error;
    })
  }


}
