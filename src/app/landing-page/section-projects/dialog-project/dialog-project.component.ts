import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '../../../../assets/interfaces/project.interface';

@Component({
  selector: 'app-dialog-project',
  standalone: true,
  imports: [],
  templateUrl: './dialog-project.component.html',
  styleUrl: './dialog-project.component.scss',
})
export class DialogProjectComponent {
  project: Project;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { projects: []; index: number }
  ) {
    this.project = this.getProject(data.index);
  }

  getProject(index: number) {
    return this.data.projects[index];
  }

  getTitle(index: number) {
    let number = index + 1;
    return number.toString().padStart(2, '0');
  }
}
