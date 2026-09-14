import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
    projects = [
        {title: 'Project One', description: 'Short description here' , link: '#'},
        {title: 'Project Two', description: 'Short description here' , link: '#'},
        {title: 'Project Three', description: 'Short description here' , link: '#'}
    ];
         
}   