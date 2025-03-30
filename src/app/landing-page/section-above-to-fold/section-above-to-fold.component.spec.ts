import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAboveToFoldComponent } from './section-above-to-fold.component';

describe('SectionAboveToFoldComponent', () => {
  let component: SectionAboveToFoldComponent;
  let fixture: ComponentFixture<SectionAboveToFoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionAboveToFoldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionAboveToFoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
