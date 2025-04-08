import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-section-contact',
  standalone: true,
  imports: [TranslateModule, FormsModule],
  templateUrl: './section-contact.component.html',
  styleUrl: './section-contact.component.scss',
})
export class SectionContactComponent {
  openPrivacyPolicy(e: any) {
    e.preventDefault();
  }
  onSubmit() {}
}
