import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-section-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './section-about-me.component.html',
  styleUrl: './section-about-me.component.scss',
})
export class SectionAboutMeComponent {
  constructor(private animations: AnimationService) {}

  @ViewChild('article') observeArticle!: ElementRef;
  @ViewChild('imgProfile') observeImgProfile!: ElementRef;

  ngAfterViewInit() {
    this.animations.observeElement(this.observeArticle, 'animation-b-t');
    this.animations.observeElement(this.observeImgProfile, 'animation-b-t');
  }
}
