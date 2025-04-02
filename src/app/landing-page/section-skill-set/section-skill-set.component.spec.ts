import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSkillSetComponent } from './section-skill-set.component';

describe('SectionSkillSetComponent', () => {
  let component: SectionSkillSetComponent;
  let fixture: ComponentFixture<SectionSkillSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSkillSetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionSkillSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
