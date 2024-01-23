import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBenefitsComponent } from './app-benefits.component';

describe('AppBenefitsComponent', () => {
  let component: AppBenefitsComponent;
  let fixture: ComponentFixture<AppBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBenefitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
