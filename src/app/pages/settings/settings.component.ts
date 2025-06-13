import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../.././core/services/theme/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent implements OnInit {
  isDarkMode: boolean = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // نقرأ الوضع الحالي عند التحميل
    this.isDarkMode = this.themeService.getCurrentTheme();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isDarkMode = this.themeService.getCurrentTheme();
  }

  logout(): void {
    console.log('Logout clicked');
  }
}
