import { Component, inject, HostListener, signal, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme';
import { NavigationService } from './services/navigation';
import { FooterComponent } from './footer/footer.component';
import { ScrollTopComponent } from './shared/scroll-top/scroll-top.component';
import { CodeRainComponent } from './shared/code-rain/code-rain.component';
import { LoadingScreenComponent } from './shared/loading-screen/loading-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, ScrollTopComponent, CodeRainComponent, LoadingScreenComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  themeService = inject(ThemeService);
  navigationService = inject(NavigationService);
  private platformId = inject(PLATFORM_ID);
  scrolled = signal(false);
  activeSection = signal('home');
  booting = signal(true);

  onBootDone() {
    this.booting.set(false);
  }

  private sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

  @HostListener('window:scroll')
  onScroll() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrolled.set(window.scrollY > 20);
    this.updateActiveSection();
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateActiveSection();
    }
  }

  private updateActiveSection() {
    for (const id of this.sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        this.activeSection.set(id);
        return;
      }
    }
  }

  scrollTo(id: string) {
    this.navigationService.scrollToSection(id);
  }
}