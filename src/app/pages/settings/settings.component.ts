import { Component } from '@angular/core';
import { ThemeService } from '../.././core/services/theme/theme.service';

@Component({
  selector: 'app-settings',
  imports: [],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  constructor(private themeService: ThemeService) {}
  isDarkMode: boolean = false;

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  logout() {
    // هتكتب هنا منطق تسجيل الخروج حسب نظامك
    console.log('Logout clicked');
  }
}