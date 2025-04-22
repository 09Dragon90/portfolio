import { Component, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [],
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
