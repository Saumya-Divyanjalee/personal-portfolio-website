import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  onSubmit() {
    console.log({ name: this.name, email: this.email, message: this.message });
    alert('Thanks! Your message has been captured.');
  }
}