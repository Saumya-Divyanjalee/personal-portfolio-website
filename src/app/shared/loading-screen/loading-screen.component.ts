import { Component, OnInit, inject, PLATFORM_ID, EventEmitter, Output, signal, afterNextRender } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-loading-screen',
  standalone: true,
  imports: [],
  templateUrl: './loading-screen.component.html',
  styleUrl: './loading-screen.component.scss'
})
export class LoadingScreenComponent implements OnInit {
  @Output() done = new EventEmitter<void>();

  private platformId = inject(PLATFORM_ID);
  lines = signal<string[]>([]);
  visible = signal(true);

  private messages = [
    'Initializing portfolio...',
    'Loading projects... [OK]',
    'Compiling Angular components... [OK]',
    'Starting Saumya.dev... [READY]'
  ];

  constructor() {
    afterNextRender(() => {
      if (!isPlatformBrowser(this.platformId)) return;

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        this.finish();
        return;
      }

      this.messages.forEach((msg, i) => {
        setTimeout(() => this.lines.update(l => [...l, msg]), i * 350);
      });

      setTimeout(() => this.finish(), this.messages.length * 350 + 400);
    });
  }

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      this.visible.set(false);
      this.done.emit();
    }
  }

  private finish() {
    this.visible.set(false);
    this.done.emit();
  }
}