import { Component, ElementRef, ViewChild, OnInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-code-rain',
  standalone: true,
  imports: [],
  templateUrl: './code-rain.component.html',
  styleUrl: './code-rain.component.scss'
})
export class CodeRainComponent implements OnInit, OnDestroy {
  @ViewChild('rainCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private platformId = inject(PLATFORM_ID);
  private ctx!: CanvasRenderingContext2D;
  private columns: number[] = [];
  private animationId?: number;
  private running = false;
  private frame = 0;
  private fontSize = 16;
  private chars = '01{}<>/;=+-JavaTSAngularSpring'.split('');

  private resizeHandler = () => this.resize();
  private visibilityHandler = () => this.handleVisibility();

  ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 500) return; // skip on small phones — performance + readability

    setTimeout(() => this.setup(), 0);
  }

  private setup() {
    const canvas = this.canvasRef?.nativeElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    this.ctx = ctx;

    this.resize();
    window.addEventListener('resize', this.resizeHandler);
    document.addEventListener('visibilitychange', this.visibilityHandler);

    this.start();
  }

  private resize() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const columnCount = Math.floor(canvas.width / this.fontSize);
    this.columns = new Array(columnCount).fill(0).map(() => Math.random() * -canvas.height);
  }

  private handleVisibility() {
    if (document.hidden) {
      this.running = false;
    } else {
      this.start();
    }
  }

  private start() {
    if (this.running) return;
    this.running = true;
    this.draw();
  }

  private draw() {
    if (!this.running) return;

    const canvas = this.canvasRef.nativeElement;
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const trailColor = isDark ? 'rgba(15, 15, 26, 0.06)' : 'rgba(255, 255, 255, 0.08)';
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#6366f1';

    // Fading trail instead of a hard clear — this is what makes it look like "rain" not "dots"
    this.ctx.fillStyle = trailColor;
    this.ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.ctx.globalAlpha = 0.7;
    this.ctx.fillStyle = accent;
    this.ctx.font = `${this.fontSize}px monospace`;

    this.columns.forEach((y, i) => {
      const char = this.chars[Math.floor(Math.random() * this.chars.length)];
      this.ctx.fillText(char, i * this.fontSize, y);

      if (y > canvas.height && Math.random() > 0.975) {
        this.columns[i] = 0;
      } else {
        this.columns[i] = y + this.fontSize;
      }
    });

    this.animationId = requestAnimationFrame(() => this.draw());
  }

  ngOnDestroy() {
    this.running = false;
    if (!isPlatformBrowser(this.platformId)) return;

    if (this.animationId) cancelAnimationFrame(this.animationId);
    window.removeEventListener('resize', this.resizeHandler);
    document.removeEventListener('visibilitychange', this.visibilityHandler);
  }
}