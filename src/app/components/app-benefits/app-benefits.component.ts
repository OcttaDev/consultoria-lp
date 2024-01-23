import { Component } from '@angular/core';
import { AppCardComponent } from '../app-card/app-card.component';
import { AppButtonComponent } from '../app-button/app-button.component';

@Component({
  selector: 'app-app-benefits',
  standalone: true,
  imports: [AppCardComponent, AppButtonComponent],
  templateUrl: './app-benefits.component.html',
  styleUrl: './app-benefits.component.css',
})
export class AppBenefitsComponent {}
