import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { AnimationService } from '../../services/animation.service';

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

  http = inject(HttpClient);

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private animations: AnimationService
  ) {}

  @ViewChild('left') observeleft!: ElementRef;
  @ViewChild('right') observeRight!: ElementRef;

  ngAfterViewInit() {
    this.animations.observeElement(this.observeleft, 'animation-l-r');
    this.animations.observeElement(this.observeRight, 'animation-l-r');
  }

  openPrivacyPolicy(e: any) {
    e.preventDefault();
    window.open('/privacyPolicy', "_blank'");
  }

  post = {
    endPoint: 'https://niko-helwig.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.valid && ngForm.submitted) {
      this.http
        .post(this.post.endPoint, this.post.body(this.dataContact))
        .subscribe({
          next: (response: any) => {
            ngForm.reset();
          },
          error: (error: any) => {
            console.error(error);
          },
          complete: () => {
            this.openSnackBar();
          },
        });
    }
  }
  openSnackBar() {
    this.snackBar.open('Message sent. Thank you for your interest.', '', {
      duration: 3000,
    });
  }
}
