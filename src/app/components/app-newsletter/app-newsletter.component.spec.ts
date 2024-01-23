import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppNewsletterComponent } from './app-newsletter.component';

describe('AppNewsletterComponent', () => {
  let component: AppNewsletterComponent;
  let fixture: ComponentFixture<AppNewsletterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppNewsletterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
