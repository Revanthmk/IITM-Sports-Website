import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class NavbarComponent {
  showNavbar: boolean;

  constructor() {
    console.log(window.outerWidth);
    if (window.outerWidth < 770) this.showNavbar = false;
    else this.showNavbar = true;
  }

  toggleNavbar() {
    this.showNavbar = !this.showNavbar;
  }
}
