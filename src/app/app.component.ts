import { Component } from '@angular/core';
import { routes } from './app-rounting.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'teste-angular';
  routes = routes
}
