import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-section-contact',
  standalone: true,
  imports: [TranslateModule, FormsModule],
  templateUrl: './section-contact.component.html',
  styleUrl: './section-contact.component.scss',
})
export class SectionContactComponent {
  dataContact = { name: '', mail: '', message: '' };
  durationInSeconds = 5;

  constructor(private snackBar: MatSnackBar) {}

  openPrivacyPolicy(e: any) {
    e.preventDefault();
  }
  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      this.openSnackBar();
      ngForm.reset();
    }
  }
  openSnackBar() {
    this.snackBar.open('Message sent. Thank you for your interest.', '', {
      duration: 3000,
    });
  }
}
