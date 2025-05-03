import { Component, ElementRef, inject, Input, ViewChild } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DialogProjectComponent } from './dialog-project/dialog-project.component';
import { MatDialog } from '@angular/material/dialog';
import { Project } from '../../../assets/interfaces/project.interface';
import { TranslationService } from '../../services/translation.service';
import { AnimationService } from '../../services/animation.service';

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
  translation = inject(TranslationService);
  @ViewChild('sectionProjects') observeSectionProjects!: ElementRef;

  constructor(
    private translate: TranslateService,
    public dialog: MatDialog,
    private animations: AnimationService
  ) {}

  openDialog(index: number): void {
    const dialogRef = this.dialog.open(DialogProjectComponent, {
      data: { projects: this.projects, index: index },
      panelClass: 'dialog-project',
    });
  }

  ngAfterViewInit() {
    this.animations.observeElement(
      this.observeSectionProjects,
      'animation-zoom'
    );
  }

  ngOnInit() {
    this.loadProjects(this.translation.getLanguage());
    this.translate.onLangChange.subscribe((event) => {
      this.loadProjects(event.lang);
    });
  }

  loadProjects(lang: string) {
    this.translate.getTranslation(lang).subscribe((data) => {
      this.projects = [];
      this.projects = data['Projects']['dataProjects'] || {};
    });
  }
}
