import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../shared/scroll-reveal.directive';

type FormState = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name = '';
  email = '';
  subject = '';
  message = '';
  state: FormState = 'idle';

  onSubmit() {
    if (!this.name || !this.email || !this.message) {
      this.state = 'error';
      return;
    }
    this.state = 'loading';
    setTimeout(() => {
      this.state = 'success';
      this.name = this.email = this.subject = this.message = '';
    }, 1200);
  }
}