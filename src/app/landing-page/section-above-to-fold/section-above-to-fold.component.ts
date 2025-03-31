import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-above-to-fold',
  standalone: true,
  imports: [HeaderComponent, TranslateModule, CommonModule],
  templateUrl: './section-above-to-fold.component.html',
  styleUrl: './section-above-to-fold.component.scss',
})
export class SectionAboveToFoldComponent {
  datas = [
    'Avalibale for remote work',
    'Frontend Developer',
    'Base in Munich',
    'Open to Work',
  ];
}
