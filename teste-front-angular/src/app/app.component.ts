import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Button } from './components/button.component';
import { Card } from './components/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste-front-angular';
}