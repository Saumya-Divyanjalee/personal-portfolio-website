import { Component, inject } from '@angular/core';
import { NavigationService } from '../services/navigation';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  navigationService = inject(NavigationService);

  scrollTo(id: string) {
    this.navigationService.scrollToSection(id);
  }
}