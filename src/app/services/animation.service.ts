import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimationService {
  constructor() {}

  observeElement(element: ElementRef, animation: string) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = element.nativeElement;
          const isBelowViewport = entry.boundingClientRect.top > 0;

          if (entry.isIntersecting) {
            el.classList.add('start-' + animation);
            el.classList.remove('reverse-' + animation);
          } else if (isBelowViewport) {
            el.classList.remove('start-' + animation);
            el.classList.add('reverse-' + animation);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(element.nativeElement);
  }
}
