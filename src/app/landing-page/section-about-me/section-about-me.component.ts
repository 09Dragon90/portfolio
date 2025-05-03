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
  sectionY = 0;
  viewportHeight: Number;
  constructor(private animations: AnimationService) {
    this.viewportHeight = window.innerHeight;
  }

  // ngAfterViewInit() {
  //   this.sectionY = this.animations.getYComponent('section-about-me');
  // }

  // ngOnInit() {
  //   window.addEventListener('scroll', this.onScroll, true);
  // }

  // onScroll = () => {
  //   const yOffset = window.scrollY;
  //   console.log('Componente Y-Wert:', this.sectionY);
  //   console.log('Aktueller Y-Wert:', yOffset);
  //   console.log('Aktueller Y-Wert:', yOffset);
  // };

  // ngOnDestroy() {
  //   window.removeEventListener('scroll', this.onScroll, true);
  // }

  @ViewChild('article') observeArticle!: ElementRef;
  @ViewChild('imgProfile') observeImgProfile!: ElementRef;

  ngAfterViewInit() {
    this.animations.observeElement(this.observeArticle, 'animation-b-t');
    this.animations.observeElement(this.observeImgProfile, 'animation-b-t');
  }
}
