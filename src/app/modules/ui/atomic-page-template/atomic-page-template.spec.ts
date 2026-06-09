import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicPageTemplate } from './atomic-page-template';

describe('AtomicPageTemplate', () => {
  let component: AtomicPageTemplate;
  let fixture: ComponentFixture<AtomicPageTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtomicPageTemplate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtomicPageTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
