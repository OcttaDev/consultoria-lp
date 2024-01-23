import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppMainComponent } from './components/app-main/app-main.component';
import { AppHeadlineComponent } from './components/app-headline/app-headline.component';
import { AppNewsletterComponent } from './components/app-newsletter/app-newsletter.component';
import { AppBenefitsComponent } from './components/app-benefits/app-benefits.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppHeaderComponent,
    AppMainComponent,
    AppHeadlineComponent,
    AppNewsletterComponent,
    AppBenefitsComponent,
    AppFooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'consultoria-lp';
}
