import { Component, HostListener, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { HeaderMobileComponent } from '../shared/header-mobile/header-mobile.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, HeaderMobileComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {
  translation = inject(TranslationService);
  currentLanguage: string;

  constructor(private translate: TranslateService) {
    this.currentLanguage = this.translation.getLanguage();
  }

  ngOnInit() {
    this.translate.onLangChange.subscribe((event) => {
      this.currentLanguage = event.lang;
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
