import { Component } from '@angular/core';
import { AppButtonComponent } from '../app-button/app-button.component';
import { Button } from '../../button';

@Component({
  selector: 'app-app-headline',
  standalone: true,
  imports: [AppButtonComponent],
  templateUrl: './app-headline.component.html',
  styleUrl: './app-headline.component.css',
})
export class AppHeadlineComponent {
  text: string = 'fale com nosso especialista';
}
