import { Component } from '@angular/core';
import { ThemeService } from '../../core/services/theme/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'] // خليه style**Urls** هنا
})
export class SettingsComponent {

  constructor(private themeService: ThemeService) {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  isDarkMode(): boolean {
    return this.themeService.isDark();
  }

  logout(): void {
    console.log('Logout clicked');
  }
}
