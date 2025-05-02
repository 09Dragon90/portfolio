import { Component, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss',
})
export class LegalNoticeComponent {
  translation = inject(TranslationService);
  currentLanguage: string;
  constructor() {
    this.currentLanguage = this.translation.getLanguage();
  }
}
