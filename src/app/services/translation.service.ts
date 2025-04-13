import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  defaultLanguage: 'de' | 'en' = 'en';
  language: 'de' | 'en' = this.defaultLanguage;

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

  getLanguage() {
    return localStorage.getItem('language') || this.defaultLanguage;
  }

  loadLanguage() {
    let language = localStorage.getItem('language');
    if (language == null) {
      this.translate.setDefaultLang(this.defaultLanguage);
      this.saveLanguage();
    } else if (language == 'de' || language == 'en') {
      this.translate.setDefaultLang(language);
      this.language = language;
    } else {
      console.error('Wrong language');
    }
  }
}
