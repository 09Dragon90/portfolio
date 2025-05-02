import { Component, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss',
})
export class PrivacyPolicyComponent {
  translation = inject(TranslationService);
  currentLanguage: string;
  constructor() {
    this.currentLanguage = this.translation.getLanguage();
  }
}
