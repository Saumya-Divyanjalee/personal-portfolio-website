import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  roles = ['Full-Stack Developer', 'Backend Developer', 'AI/ML Enthusiast'];
  currentRole = '';
  private roleIndex = 0;
  private charIndex = 0;
  private typing = true;
  private timer: any;

  ngOnInit() {
    this.timer = setInterval(() => this.tick(), 100);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

  private tick() {
    const word = this.roles[this.roleIndex];
    if (this.typing) {
      this.currentRole = word.slice(0, ++this.charIndex);
      if (this.charIndex === word.length) {
        this.typing = false;
        setTimeout(() => {}, 1000); // pause before deleting
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