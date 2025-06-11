import { AuthService } from './../../core/services/auth/auth.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(private authService: AuthService, private location: Location) {}



  logout(): void {
    this.authService.logout();
  }

  goBack(): void {
    this.location.back();
  }
}