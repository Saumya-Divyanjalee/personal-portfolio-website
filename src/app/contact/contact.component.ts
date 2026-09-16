import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ScrollRevealDirective } from '../shared/scroll-reveal.directive';

type FormState = 'idle' | 'loading' | 'success' | 'error';

const EMAILJS_SERVICE_ID = 'PASTE_YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'PASTE_YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'PASTE_YOUR_PUBLIC_KEY';

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

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      from_name: this.name,
      from_email: this.email,
      subject: this.subject || 'Portfolio Contact',
      message: this.message
    }, EMAILJS_PUBLIC_KEY)
      .then(() => {
        this.state = 'success';
        this.name = this.email = this.subject = this.message = '';
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        this.state = 'error';
      });
  }
}