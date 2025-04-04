import { Component, Input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DialogProjectComponent } from './dialog-project/dialog-project.component';

interface Project {
  name: string;
  technologies: string[];
  images: string;
  description: string;
  github: string;
  link: string;
}

@Component({
  selector: 'app-section-projects',
  standalone: true,
  imports: [TranslateModule, DialogProjectComponent],
  templateUrl: './section-projects.component.html',
  styleUrl: './section-projects.component.scss',
})
export class SectionProjectsComponent {
  @Input() index: number = 0;
  projects: Project[] = [];

  constructor(private translate: TranslateService) {}

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
