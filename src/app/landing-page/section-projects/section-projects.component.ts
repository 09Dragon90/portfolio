import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DialogProjectComponent } from './dialog-project/dialog-project.component';
import { MatDialog } from '@angular/material/dialog';
import { Project } from '../../../assets/interfaces/project.interface';

@Component({
  selector: 'app-section-projects',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './section-projects.component.html',
  styleUrl: './section-projects.component.scss',
})
export class SectionProjectsComponent {
  @Input() index: number = 0;
  projects: Project[] = [];

  constructor(private translate: TranslateService, public dialog: MatDialog) {}

  openDialog(index: number): void {
    const dialogRef = this.dialog.open(DialogProjectComponent, {
      data: { projects: this.projects, index: index },
      panelClass: 'dialog-project',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.loadMarquee(localStorage.getItem('language') || 'de');
    this.translate.onLangChange.subscribe((event) => {
      this.loadMarquee(event.lang);
    });
  }

  loadMarquee(lang: string) {
    this.translate.getTranslation(lang).subscribe((data) => {
      this.projects = [];
      this.projects = data['Projects']['dataProjects'] || {};
      console.log(this.projects[0].name);
    });
  }
}
