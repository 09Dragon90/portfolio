import { Component } from '@angular/core';
import { SectionAboveToFoldComponent } from './section-above-to-fold/section-above-to-fold.component';
import { SectionAboutMeComponent } from './section-about-me/section-about-me.component';
import { SectionSkillSetComponent } from './section-skill-set/section-skill-set.component';
import { SectionProjectsComponent } from './section-projects/section-projects.component';
import { SectionContactComponent } from './section-contact/section-contact.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    SectionAboveToFoldComponent,
    SectionAboutMeComponent,
    SectionSkillSetComponent,
    SectionProjectsComponent,
    SectionContactComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
