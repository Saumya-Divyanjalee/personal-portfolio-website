import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../shared/scroll-reveal.directive';

interface SkillGroup {
  category: string;
  items: string[];
}

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';

const ICON_MAP: Record<string, { img?: string; fa?: string }> = {
  'Java': { img: `${DEVICON}/java/java-original.svg` },
  'JavaScript': { img: `${DEVICON}/javascript/javascript-original.svg` },
  'TypeScript': { img: `${DEVICON}/typescript/typescript-original.svg` },
  'Python': { img: `${DEVICON}/python/python-original.svg` },
  'SQL': { fa: 'fas fa-database' },
  'Spring Boot': { img: `${DEVICON}/spring/spring-original.svg` },
  'Spring Security': { fa: 'fas fa-shield-halved' },
  'JPA/Hibernate': { img: `${DEVICON}/hibernate/hibernate-original.svg` },
  'Node.js': { img: `${DEVICON}/nodejs/nodejs-original.svg` },
  'Express.js': { img: `${DEVICON}/express/express-original.svg` },
  'REST APIs': { fa: 'fas fa-globe' },
  'JWT': { fa: 'fas fa-key' },
  'Angular': { img: `${DEVICON}/angularjs/angularjs-original.svg` },
  'React': { img: `${DEVICON}/react/react-original.svg` },
  'HTML': { img: `${DEVICON}/html5/html5-original.svg` },
  'CSS': { img: `${DEVICON}/css3/css3-original.svg` },
  'Tailwind CSS': { fa: 'fas fa-wind' },
  'MySQL': { img: `${DEVICON}/mysql/mysql-original.svg` },
  'MongoDB': { img: `${DEVICON}/mongodb/mongodb-original.svg` },
  'PyTorch': { img: `${DEVICON}/pytorch/pytorch-original.svg` },
  'Scikit-learn': { fa: 'fas fa-chart-line' },
  'NumPy': { fa: 'fas fa-calculator' },
  'Pandas': { fa: 'fas fa-table' },
  'CNN': { fa: 'fas fa-brain' },
  'Git': { img: `${DEVICON}/git/git-original.svg` },
  'GitHub': { img: `${DEVICON}/github/github-original.svg` },
  'Maven': { img: `${DEVICON}/maven/maven-original.svg` },
  'Postman': { img: `${DEVICON}/postman/postman-original.svg` },
  'VS Code': { img: `${DEVICON}/vscode/vscode-original.svg` },
  'IntelliJ IDEA': { img: `${DEVICON}/intellij/intellij-original.svg` },
};

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

  getIcon(name: string) {
    return ICON_MAP[name] ?? { fa: 'fas fa-code' };
  }
}