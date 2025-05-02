import { Component, Inject, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../../services/translation.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menue',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './menue.component.html',
  styleUrl: './menue.component.scss',
})
export class MenueComponent {
  translation = inject(TranslationService);
  menueActive: boolean;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { menueActive: boolean }) {
    this.menueActive = data.menueActive;
  }
}
