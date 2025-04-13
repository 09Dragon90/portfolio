import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../services/translation.service';

@Component({
  selector: 'app-menue',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './menue.component.html',
  styleUrl: './menue.component.scss',
})
export class MenueComponent {
  translation = inject(TranslationService);

  constructor() {}
}
