import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-section-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './section-about-me.component.html',
  styleUrl: './section-about-me.component.scss',
})
export class SectionAboutMeComponent {}
