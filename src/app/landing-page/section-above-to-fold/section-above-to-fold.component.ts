import { Component, HostListener, inject } from '@angular/core';
import { HeaderComponent } from './../../shared/header/header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { HeaderMobileComponent } from '../../shared/header-mobile/header-mobile.component';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-section-above-to-fold',
  standalone: true,
  imports: [
    HeaderComponent,
    HeaderMobileComponent,
    TranslateModule,
    CommonModule,
  ],
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
  translation = inject(TranslationService);

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.loadMarquee(this.translation.getLanguage());
    this.translate.onLangChange.subscribe((event) => {
      this.loadMarquee(event.lang);
    });
  }

  loadMarquee(lang: string) {
    this.translate.getTranslation(lang).subscribe((data) => {
      this.messages = data['Marquee'] || {};
    });
  }

  windowWidth: number = window.innerWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.windowWidth = (event.target as Window).innerWidth;
  }

  isSmallScreen(): boolean {
    return this.windowWidth > 780;
  }
}
