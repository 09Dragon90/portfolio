import { Component } from '@angular/core';
import { HeaderComponent } from './../../shared/header/header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
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

  messages: Record<string, string> = {};

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.loadMarquee(localStorage.getItem('language') || 'de');
    this.translate.onLangChange.subscribe((event) => {
      this.loadMarquee(event.lang);
    });
  }

  loadMarquee(lang: string) {
    this.translate.getTranslation(lang).subscribe((data) => {
      this.messages = data['Marquee'] || {};
    });
  }
}
