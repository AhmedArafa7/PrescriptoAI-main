import { AuthService } from './../../core/services/auth/auth.service';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(private authService: AuthService, private location: Location) {}




}