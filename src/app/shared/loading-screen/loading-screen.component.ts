import { Component, OnInit, inject, PLATFORM_ID, EventEmitter, Output } from '@angular/core';
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
  lines: string[] = [];
  visible = true;

  private messages = [
    'Initializing portfolio...',
    'Loading projects... [OK]',
    'Compiling Angular components... [OK]',
    'Starting Saumya.dev... [READY]'
  ];

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) {
      this.visible = false;
      this.done.emit();
      return;
    }

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      this.finish();
      return;
    }

    this.messages.forEach((msg, i) => {
      setTimeout(() => this.lines.push(msg), i * 350);
    });

    setTimeout(() => this.finish(), this.messages.length * 350 + 400);
  }

  private finish() {
    this.visible = false;
    this.done.emit();
  }
}