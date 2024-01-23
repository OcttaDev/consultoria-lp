import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-app-button',
  standalone: true,
  imports: [],
  templateUrl: './app-button.component.html',
  styleUrl: './app-button.component.css',
})
export class AppButtonComponent {
  @Input() title!: string;
}
