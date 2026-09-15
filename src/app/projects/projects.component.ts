import { Component, signal } from '@angular/core';
import { PROJECTS } from '../data/portfolio-data';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = PROJECTS;
  activeFilter = signal<string>('all');

  categories = ['all', 'fullstack', 'backend', 'ai-ml', 'java'];

  get filteredProjects(): Project[] {
    const filter = this.activeFilter();
    return filter === 'all'
      ? this.projects
      : this.projects.filter(p => p.category === filter);
  }

  setFilter(cat: string) {
    this.activeFilter.set(cat);
  }
}