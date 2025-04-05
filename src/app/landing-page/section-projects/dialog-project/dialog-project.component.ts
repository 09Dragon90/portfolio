import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-project',
  standalone: true,
  imports: [],
  templateUrl: './dialog-project.component.html',
  styleUrl: './dialog-project.component.scss',
})
export class DialogProjectComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { projects: []; index: number }
  ) {}
}
