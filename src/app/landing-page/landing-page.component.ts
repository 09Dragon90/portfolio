import { Component } from '@angular/core';
import { SectionAboveToFoldComponent } from './section-above-to-fold/section-above-to-fold.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [SectionAboveToFoldComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
