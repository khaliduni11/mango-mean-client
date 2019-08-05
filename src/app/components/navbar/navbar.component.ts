import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['../styles/css/main.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor() { }

  ngOnInit() {
    if (localStorage.jwTToken) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }

  }

  logout() {
    localStorage.removeItem("jwTToken")
    this.isAuthenticated = false;
  }

}
