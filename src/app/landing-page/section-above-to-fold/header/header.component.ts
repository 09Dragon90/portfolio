import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  language: 'de' | 'en' = 'de';
  constructor(private translate: TranslateService) {}

  changeLanguage() {
    this.language = this.language == 'de' ? 'en' : 'de';
    this.translate.use(this.language);
  }
}
