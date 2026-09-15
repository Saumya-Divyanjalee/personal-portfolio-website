import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../shared/scroll-reveal.directive';

interface SkillGroup {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ScrollRevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillGroups: SkillGroup[] = [
    { category: 'Languages', items: ['Java', 'JavaScript', 'TypeScript', 'Python', 'SQL'] },
    { category: 'Backend', items: ['Spring Boot', 'Spring Security', 'JPA/Hibernate', 'Node.js', 'Express.js', 'REST APIs', 'JWT'] },
    { category: 'Frontend', items: ['Angular', 'React', 'HTML', 'CSS', 'Tailwind CSS'] },
    { category: 'Database', items: ['MySQL', 'MongoDB'] },
    { category: 'AI/ML', items: ['PyTorch', 'Scikit-learn', 'NumPy', 'Pandas', 'CNN'] },
    { category: 'Tools', items: ['Git', 'GitHub', 'Maven', 'Postman', 'VS Code', 'IntelliJ IDEA'] },
  ];
}