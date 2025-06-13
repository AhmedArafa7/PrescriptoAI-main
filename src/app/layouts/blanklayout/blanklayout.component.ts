import { Component, inject, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../core/services/auth/auth.service';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-blanklayer',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './blanklayout.component.html',
  styleUrls: ['./blanklayout.component.scss']
})
export class BlanklayoutComponent {

  readonly authService = inject(AuthService);

  @Input() isLogin: boolean = true;
}
