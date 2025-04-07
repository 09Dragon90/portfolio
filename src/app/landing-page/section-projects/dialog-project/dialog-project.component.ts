import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Project } from '../../../../assets/interfaces/project.interface';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-dialog-project',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './dialog-project.component.html',
  styleUrl: './dialog-project.component.scss',
})
export class DialogProjectComponent {
  project: Project;
  indexProject: number;
  indexTitle: string = '';

  constructor(
    private dialogRef: MatDialogRef<DialogProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { projects: []; index: number }
  ) {
    this.indexProject = data.index;
    this.project = this.getProject(this.indexProject);
    this.getTitle(this.indexProject);
  }

  getProject(index: number) {
    return this.data.projects[index];
  }

  getTitle(index: number) {
    let number = index + 1;
    this.indexTitle = number.toString().padStart(2, '0');
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  nextProject() {
    let length = this.data.projects.length;
    this.indexProject = (this.indexProject + 1) % length;
    this.getTitle(this.indexProject);
    this.project = this.getProject(this.indexProject);
  }
}
