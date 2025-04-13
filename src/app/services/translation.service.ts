import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  language: 'de' | 'en' = 'de';

  constructor(private translate: TranslateService) {
    this.loadLanguage();
  }

  changeLanguage() {
    this.language = this.language == 'de' ? 'en' : 'de';
    this.translate.use(this.language);
    this.saveLanguage();
  }

  saveLanguage() {
    localStorage.setItem('language', this.language);
  }

  loadLanguage() {
    let language = localStorage.getItem('language');
    if (language == null) {
      this.translate.setDefaultLang('de');
      this.saveLanguage();
    } else if (language == 'de' || language == 'en') {
      this.translate.setDefaultLang(language);
      this.language = language;
    } else {
      console.error('Wrong language');
    }
  }
}
