import { Injectable, signal, effect, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    effect(() => {
      const current = this.theme();
      if (this.isBrowser) {
        document.documentElement.setAttribute('data-theme', current);
        localStorage.setItem('portfolio-theme', current);
      }
    });
  }

  private getInitialTheme(): Theme {
    if (!this.isBrowser) {
      return 'light'; // server render always defaults to light, browser corrects it after hydration
    }

    const saved = localStorage.getItem('portfolio-theme') as Theme | null;
    if (saved === 'light' || saved === 'dark') return saved;

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }

  toggle() {
    this.theme.set(this.theme() === 'dark' ? 'light' : 'dark');
  }
}