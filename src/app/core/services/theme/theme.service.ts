import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly themeKey = 'theme';
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.loadTheme();
    }
  }

  toggleTheme(): void {
    if (!this.isBrowser) return;

    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem(this.themeKey, isDark ? 'dark' : 'light');
  }

  loadTheme(): void {
    if (!this.isBrowser) return;

    const savedTheme = localStorage.getItem(this.themeKey);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  isDark(): boolean {
    if (!this.isBrowser) return false;
    return document.documentElement.classList.contains('dark');
  }
}
