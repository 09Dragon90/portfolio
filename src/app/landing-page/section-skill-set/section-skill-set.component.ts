import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-skill-set',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-skill-set.component.html',
  styleUrl: './section-skill-set.component.scss',
})
export class SectionSkillSetComponent {
  skills = [
    { name: 'HTML', image: 'html.png' },
    { name: 'CSS', image: 'css.png' },
    { name: 'JavaScript', image: 'javaScript.png' },
    { name: 'Material Design', image: 'materialDesign.png' },
    { name: 'TypeScript', image: 'typeScript.png' },
    { name: 'Angular', image: 'angular.png' },
    { name: 'Firebase', image: 'firebase.png' },
    { name: 'Git', image: 'git.png' },
    { name: 'Rest-API', image: 'restApi.png' },
    { name: 'Scrum', image: 'scrum.png' },
    { name: 'Growth Mindset', image: 'growthMindset.png' },
  ];

  getAltName(nameImages: string) {
    return nameImages.split('.')[0] + '_icon';
  }
}
