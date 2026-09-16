import { Component, OnInit, OnDestroy, ElementRef, inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationService } from '../services/navigation';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  @ViewChild('magneticBtn') magneticBtn?: ElementRef<HTMLElement>;

  private platformId = inject(PLATFORM_ID);
  private navigationService = inject(NavigationService);

  roles = ['Full-Stack Developer', 'Backend Developer', 'AI/ML Enthusiast'];
  currentRole = '';
  private roleIndex = 0;
  private charIndex = 0;
  private typing = true;
  private timer: any;
  private moveHandler = (e: MouseEvent) => this.onMouseMove(e);
  private leaveHandler = () => this.onMouseLeave();

  scrollToProjects() { this.navigationService.scrollToSection('projects'); }
  scrollToContact() { this.navigationService.scrollToSection('contact'); }

  ngOnInit() {
    this.timer = setInterval(() => this.tick(), 100);

    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => this.attachMagnetic(), 0);
    }
  }

  ngOnDestroy() {
    clearInterval(this.timer);
    if (!isPlatformBrowser(this.platformId)) return;

    const btn = this.magneticBtn?.nativeElement;
    if (btn) {
      btn.removeEventListener('mousemove', this.moveHandler);
      btn.removeEventListener('mouseleave', this.leaveHandler);
    }
  }

  private attachMagnetic() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (prefersReduced || isTouch) return;

    const btn = this.magneticBtn?.nativeElement;
    if (!btn) return;
    btn.addEventListener('mousemove', this.moveHandler);
    btn.addEventListener('mouseleave', this.leaveHandler);
  }

  private onMouseMove(e: MouseEvent) {
    const btn = this.magneticBtn!.nativeElement;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  }

  private onMouseLeave() {
    const btn = this.magneticBtn!.nativeElement;
    btn.style.transform = 'translate(0, 0)';
  }

  private tick() {
    const word = this.roles[this.roleIndex];
    if (this.typing) {
      this.currentRole = word.slice(0, ++this.charIndex);
      if (this.charIndex === word.length) {
        this.typing = false;
        this.timer = setTimeout(() => this.tick(), 1200);
        return;
      }
    } else {
      this.currentRole = word.slice(0, --this.charIndex);
      if (this.charIndex === 0) {
        this.typing = true;
        this.roleIndex = (this.roleIndex + 1) % this.roles.length;
      }
    }
  }
}