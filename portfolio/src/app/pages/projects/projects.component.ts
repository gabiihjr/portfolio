import { projects } from './../../data/projects';
import { Component } from '@angular/core';
import { Project } from 'src/app/types/project-type';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: Project[] = projects;

}
