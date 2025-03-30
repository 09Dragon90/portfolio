import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-section-above-to-fold',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './section-above-to-fold.component.html',
  styleUrl: './section-above-to-fold.component.scss',
})
export class SectionAboveToFoldComponent {}
